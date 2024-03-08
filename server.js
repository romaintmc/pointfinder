const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const mariadb = require('mariadb');
const cors = require('cors');
const crypto = require("crypto");
const nodeoutlook = require('nodejs-nodemailer-outlook');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

function sanitizeString(str) {
  return str.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(cors());

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));


//BDD Pointfinder
const pool = mariadb.createPool({
  host: "mysql-pointfinder.alwaysdata.net",
  port: 3306,
  user: "333343",
  password: "pfglproj",
  database: "pointfinder_bdd"
});

app.get('/testapi', (req, res) => {
  console.log("testapi")
  res.send('API is running');
});

app.post('/signup', async (req, res) => {
  const { login, password, mail} = req.body;
  try {
    if (!password || typeof password !== 'string' || password.trim().length === 0) {
      return res.status(501).send('Un mot de passe valide est requis.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const users = await pool.query("SELECT * FROM users WHERE mail = ?", [mail]);
    const log = await pool.query("SELECT * FROM users WHERE login = ?", [login]);
    if (users.length > 0) {
      return res.status(409).send('Mail déjà existant.');
    }
    if (log.length > 0) {
      return res.status(410).send('Login déjà existant.');
    }
    await pool.query("INSERT INTO users (mail, login, pwd, active, timestamp) VALUES (?, ?, ?, ?, ?)", [mail, login, hashedPassword, 1, String(Date.now()).substring(0, 10)]);
    res.status(200).send('Utilisateur créé.');
  } catch (error) {
    res.status(500).send(`Erreur lors de la création de l'utilisateur : ${error}`);
  }
});

app.post('/signin', async (req, res) => {
  const { auth, password } = req.body;
  try {
    console.log(auth)
    if (auth.includes('@')) {
      console.log("Mail")
      const users = await pool.query("SELECT * FROM users WHERE mail = ?", [auth]);
      if (users.length === 0) {
        return res.status(404).send('Utilisateur non trouvé.');
      }
      if (!password) {
        return res.status(400).send('Mot de passe requis.');
      }
      if (users[0].active === 0) {
        return res.status(501).send('Utilisateur désactivé.');
      }
      const match = await bcrypt.compare(password, users[0].pwd);
      if (match) {
        res.status(200).send('Connexion réussie.');
      } else {
        res.status(401).send('Mot de passe incorrect.');
      }
    } else {
      console.log("Login")
      const users = await pool.query("SELECT * FROM users WHERE login = ?", [auth]);
      if (users.length === 0) {
        return res.status(404).send('Utilisateur non trouvé.');
      }
      if (!password) {
        return res.status(400).send('Mot de passe requis.');
      }
      if (users[0].active === 0) {
        return res.status(501).send('Utilisateur désactivé.');
      }
      const match = await bcrypt.compare(password, users[0].pwd);
      if (match) {
        res.status(200).send('Connexion réussie.');
      } else {
        res.status(401).send('Mot de passe incorrect.');
      }
    }
  } catch (error) {
    res.status(500).send(`Erreur lors de la connexion : ${error}`);
  }
});

app.post('/receiveusers', async (req, res) => {
  const { choice } = req.body;
  try {
    if(choice === 0){
      const users = await pool.query("SELECT * FROM users WHERE active = ?", [choice]);
      res.status(200).send(users);
    }
    else if(choice === 1){
      const users = await pool.query("SELECT * FROM users WHERE active = ?", [choice]);
      res.status(200).send(users);
    }
    else if(choice === 2){
      const users = await pool.query("SELECT * FROM users");
      res.status(200).send(users);
    }
    else{
      res.status(501).send("Mauvais choix");
    }
  } catch (error) {
    res.status(500).json({message :`Erreur lors de la récupération des utilisateurs : ${error}`});
  }

});

app.post('/session', async (req, res) => {
  const { auth } = req.body;
  try {
    if (auth.includes('@')) {
      const users = await pool.query("SELECT * FROM users WHERE mail = ?", [auth]);
      if (users.length === 0) {
        return res.status(404).send('Utilisateur non trouvé.');
      }
      res.status(200).send(users[0]);
    }
    else{
      const users = await pool.query("SELECT * FROM users WHERE login = ?", [auth]);
      if (users.length === 0) {
        return res.status(404).send('Utilisateur non trouvé.');
      }
      res.status(200).send(users[0]);
      }
    } catch (error) {
      res.status(500).send(`Erreur lors de la récupération de l'utilisateur : ${error}`);
    }


});

app.delete('/deleteuser', async (req, res) => {
  const { mail } = req.body;
  try{
    const users = await pool.query("SELECT * FROM users WHERE mail = ?", [mail]);
    if (users.length === 0) {
      return res.status(404).send("Pas d'utilisateur en base.");
    }
    await pool.query("DELETE FROM users WHERE mail = ?", [mail]);
    res.status(200).send("Utilisateurs supprimé.");
  } catch (error) {
    res.status(500).send(`Erreur lors de la suppression de l'utilisateur : ${error}`);
  }
});

app.put('/inactiveuser', async (req, res) => {
  const { mail, password } = req.body;
  try{
    const users = await pool.query("SELECT * FROM users WHERE mail = ?", [mail]);
    if (users.length === 0) {
      return res.status(404).send('Utilisateur non trouvé.');
    }
    if (!password) {
      return res.status(400).send('Mot de passe requis.');
    }
    const match = await bcrypt.compare(password, users[0].pwd);
    if (match) {
      await pool.query("UPDATE users SET active = 0 WHERE mail = ?", [mail]);
      res.status(200).send("Utilisateur désactivé.");
    } else {
      res.status(401).send('Mot de passe incorrect.');
    }
  } catch (error) {
    res.status(500).send(`Erreur lors de la désactivation de l'utilisateur : ${error}`);
  }
});

app.put('/activeuser', async (req, res) => {
  const { mail } = req.body;
  try{
    const users = await pool.query("SELECT * FROM users WHERE mail = ?", [mail]);
    if (users.length === 0) {
      return res.status(404).send('Utilisateur non trouvé.');
    }
    await pool.query("UPDATE users SET active = 1 WHERE mail = ?", [mail]);
    res.status(200).send("Utilisateur désactivé.");
  } catch (error) {
    res.status(500).send(`Erreur lors de la désactivation de l'utilisateur : ${error}`);
  }
});

app.put('/changehabilitation', async (req, res) => {
  const { mail, id_habilitation } = req.body;
  try{
    const users = await pool.query("SELECT * FROM users WHERE mail = ?", [mail]);
    if (users.length === 0) {
      return res.status(404).send('Utilisateur non trouvé.');
    }
    if(id_habilitation === 10){
      await pool.query("UPDATE users SET id_habilitation = 50 WHERE mail = ?", [mail]);
      res.status(200).send("Utilisateur passé en administrateur.");
    }
    else if (id_habilitation === 50){
      await pool.query("UPDATE users SET id_habilitation = 10 WHERE mail = ?", [mail]);
      res.status(200).send("Administrateur passé en utilisateur.");
    }
  } catch (error) {
    res.status(500).send(`Erreur lors du changement d'habilitation : ${error}`);
  }
});

app.put('/updatemail', async (req, res) => {
  const { mail, newmail } = req.body;
  try{
    const users = await pool.query("SELECT * FROM users WHERE mail = ?", [mail]);
    if (users.length === 0) {
      return res.status(404).send('Utilisateur non trouvé.');
    }
    if(mail === newmail){
        return res.status(501).send('Mail inchangé.');
    }
    await pool.query("UPDATE users SET mail = ? WHERE mail = ?", [newmail, mail]);
    res.status(200).send("Mail modifié.");
  } catch (error) {
    res.status(500).send(`Erreur lors de la modification du mail : ${error}`);
  }
});

app.put('/updatemaillogin', async (req, res) => {
    const { newlogin, mail, newmail } = req.body;
    try{
        const users = await pool.query("SELECT * FROM users WHERE mail = ?", [mail]);
        if (users.length === 0) {
            return res.status(404).send('Utilisateur non trouvé.');
        }
        if(mail === newmail){
            return res.status(501).send('Mail inchangé.');
        }
        await pool.query("UPDATE users SET mail = ?, login = ? WHERE mail = ?", [newmail, newlogin, mail]);
        res.status(200).send("Mail modifié.");
    } catch (error) {
        res.status(500).send(`Erreur lors de la modification du mail : ${error}`);
    }
});

app.put('/updatelogin', async (req, res) => {
    const { mail, newlogin } = req.body;
    try{
        const users = await pool.query("SELECT * FROM users WHERE mail = ?", [mail]);
        if (users.length === 0) {
            return res.status(404).send('Utilisateur non trouvé.');
        }
        await pool.query("UPDATE users SET login = ? WHERE mail = ?", [newlogin, mail]);
        res.status(200).send("Login modifié.");
    } catch (error) {
        res.status(500).send(`Erreur lors de la modification du mail : ${error}`);
    }
});

app.put('/updatepwd', async (req, res) => {
  const { mail, newpwd } = req.body;
  try{
    const users = await pool.query("SELECT * FROM users WHERE mail = ?", [mail]);
    if (users.length === 0) {
      return res.status(404).send('Utilisateur non trouvé.');
    }
    const hashedPassword = await bcrypt.hash(newpwd, 10);
    await pool.query("UPDATE users SET pwd = ? WHERE mail = ?", [hashedPassword, mail]);
    res.status(200).send(`Mot de passe modifié : ${newpwd}`);
  } catch (error) {
    res.status(500).send(`Erreur lors de la modification du mot de passe : ${error}`);
  }
});

app.post('/interets', async (req, res) => {
  const { id_type, code_postal } = req.body;
  try{
    const lieux = await pool.query("SELECT libelle, latitude, longitude, code_postal, opening_hours, phone_number, handicap, url, description, sous_description FROM lieu WHERE id_type = ? AND code_postal = ?", [id_type, code_postal]);
    if (lieux.length === 0) {
      return res.status(404).send('Pas de lieux trouvés.');
    }
    res.status(200).send(lieux);
  } catch (error) {
    res.status(500).send(`Erreur lors de la récupérations des données : ${error}`);
  }
});

app.post('/send-reset-password-email', async (req, res) => {
  const { mail } = req.body;
  console.log(mail)
  const password = crypto.randomBytes(8).toString('hex');
  try{
    const users = await pool.query("SELECT * FROM users WHERE mail = ?", [mail]);
    if (users.length === 0) {
      return res.status(404).send('Utilisateur non trouvé.');
    }
    const text = "Bonjour "+ users[0].login +"!\nVoici votre nouveau mot de passe pour l'application Pointfinder : " + password + "\nLors de votre prochaine connexion, vous pourrez changer ce mot de passe via votre profil";
    nodeoutlook.sendEmail({
          auth: {
            user: "pointfinder@outlook.fr",
            pass: "N:2^$2Nnk2a6Sc"
          },
          from: "pointfinder@outlook.fr",
          to: mail,
          subject: 'Your new password',
          text: text,
          onError: (e) => console.log(e),
          onSuccess: (i) => res.status(200).send(password)
        }
    );
  }
  catch (error){
    res.status(500).send("Erreur lors de l'envoi de l'adresse mail")
  }
});

app.post('/send-email', async (req, res) => {
  const { first_name, last_name, object, body, mail } = req.body;
  try{
    const contact = "Contact : " + first_name + " " + last_name + " (" + mail + ")";
    const corps = contact + "\n" + body;
    nodeoutlook.sendEmail({
          auth: {
            user: "pointfinder@outlook.fr",
            pass: "N:2^$2Nnk2a6Sc"
          },
          from: "pointfinder@outlook.fr",
          to: "pointfinder.projet@gmail.com",
          subject: object,
          text: corps,
          onError: (e) => console.log(e),
          onSuccess: (i) => res.status(200).send("Mail envoyé")
        }
    );
  }
  catch (error){
    res.status(500).send("Erreur lors de l'envoi de l'adresse mail")
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});