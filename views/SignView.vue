<template>
  <div>
    <img class="logo" src="../assets/logo_pointfinder.png" @click="redirectHomePage"/>
    
    <div class="title-container">
      <h1>Welcome on PointFinder !</h1>
      <h4>Please Login or subscribe to access the application</h4>
    </div>
    
    <div class="tabs-container">
      <tabs :tabs="tabs" @tab-changed="updateActiveTab">
        <!-- Utilisation de la directive v-show pour afficher le contenu de l'onglet actif -->
        <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
          <!-- Contenu spécifique à l'onglet -->
          <div v-if="index === 0">
            <form @submit.prevent="signin">
              <div>
                <input v-model="loginsignin" type="text" placeholder="Username or email" required />
                <input v-model="passwordsignin" type="password" placeholder="Password" required />
                <div>
                  <a href="#" class="forgot-password" @click="showResetPasswordModal = true">Forgot password?</a>
                </div>
                <button type="submit" class="sign-button">Sign-in</button>
              </div>
            </form>
          </div>
          <div v-if="index === 1">
            <form @submit.prevent="signup">
              <div class="form-group">
                <input id="login" v-model="loginsignup" type="text" placeholder="Username" required>
              </div>
              <div class="form-group">
                <input id="mail" v-model="mail" type="mail" placeholder="E-mail" required>
              </div>
              <div class="form-group">
                <input id="password" v-model="passwordsignup" type="password" placeholder="Password" required>
              </div>
              <div class="form-group">
                <input id="confirmpassword" v-model="confirmpassword" type="password" placeholder="Confirm your password" required>
              </div>
              <button type="submit" class="sign-button">Sign-up</button>
            </form>
          </div>
        </div>
      </tabs>
      <!-- Zone où le message toast sera affiché -->
      <div v-if="showErrorMessage" class="toast-container"><span class="toast-message">{{ errorMessage }}</span></div>
    </div>
  </div>

  <!-- Fenêtre modale pour réinitialiser le mot de passe -->
  <div v-if="showResetPasswordModal" class="modal-overlay" @click.self="showResetPasswordModal = false">
    <div class="modal">
      <h2>Reset Password</h2>
      <form @submit.prevent="sendEmailResetPassword">
        <input type="email" v-model="resetEmail" placeholder="Enter your email" required>
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  </div>
</template>
  
<script>
  import Tabs from "../components/TabsComponent.vue";
  import { useToast } from 'vue-toastification'
  
  export default {
    // Fonction de setup pour permettre l'utilisation de Toast sur cette page
    setup() {
      // Get toast interface
      const toast = useToast();

      return { toast }
    },
    components: {
      Tabs,
    },
    data() {
      return {
        tabs: [
          { label: "Sign-in"},
          { label: "Sign-up"},
          // Ajoutez autant d'onglets que nécessaire
        ],
        activeTab: 0,
        loginsignin: '',
        loginsignup: '',
        passwordsignin: '',
        passwordsignup: '',
        mail: '',
        confirmpassword: '',
        resetEmail: '',
        
        showResetPasswordModal: false,
        showErrorMessage: false,
        errorMessage: ''
      };
    },
    methods: {
      redirectHomePage() {
        // Redirection vers la page d'accueil lors du clic sur le logo Pointfinder
        this.$router.push({ path: '/' });
      },
      updateActiveTab(index) {
        this.activeTab = index;
      },
      async signup() {
        // Utiliser une expression régulière pour vérifier que le login ne contient que des lettres et des chiffres
        const validLoginRegex = /^[a-zA-Z0-9]+$/;

        if (!this.login.match(validLoginRegex)) {
          // Si le login contient des caractères non autorisés, afficher un message d'erreur
          this.toast.error("Signup error: username must contain only letters and numbers", {
            position: "top-right",
            timeout: 5000,
            closeButton: "button",
          });
          return; // Arrêter l'exécution si le login est invalide
        }

        if(this.passwordsignup === this.confirmpassword){
          try {
            const response = await fetch('https://pointfinder.alwaysdata.net/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                login: this.loginsignup,
                password: this.passwordsignup,
                mail: this.mail
              }),
            });
            if (response.status === 200) {
              console.log('Inscription réussie');
              this.sessionStorageCredentials();
            } else {
              this.toast.error("Subscription error: user already exists or deleted", {
                position: "top-right",
                timeout: 5000,
                closeButton: "button",
              });
            }
          } catch (error) {
            console.error('Erreur:', error);
            this.toast.error("Server error", {
              position: "top-right",
              timeout: 5000,
              closeButton: "button",
            });
          }
        }
        else{
          this.toast.error("Subscription error: passwords do not match", {
              position: "top-right",
              timeout: 5000,
              closeButton: "button",
            });
          }
      },
      async signin() {
        try {
          const response = await fetch('https://pointfinder.alwaysdata.net/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              auth: this.loginsignin,
              password: this.passwordsignin,
            }),
          });
          if (response.status === 200) {
            // Connexion réussie
            console.log('Connexion réussie:');
            this.sessionStorageCredentials();
          } else {
            this.toast.error("Connection error: login or password incorrect", {
              position: "top-right",
              timeout: 5000,
              closeButton: "button",
            });
          }
        } catch (error) {
          console.error('Erreur:', error);
          this.toast.error("Server error", {
            position: "top-right",
            timeout: 5000,
            closeButton: "button",
          });
        }
      },
      async sessionStorageCredentials() {
        // On récupère toutes les informations liées à l'utilisateur connecté 
        try {
          const response = await fetch('https://pointfinder.alwaysdata.net/session', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                auth: this.loginsignin
              }),
            });
            if (response.status === 200) {
              // Connexion réussie
              const data = await response.json();
              //On stocke le résultat de ces informations dans un objet de session
              sessionStorage.setItem('user', JSON.stringify({ username: data.login, mail: data.mail,
              admin: data.id_habilitation == 50 ? true : false}));
                console.log(sessionStorage.getItem('user'));
              // Redirigez l'utilisateur vers la page de map
              this.$router.push({ path: '/map' });
            } else {
              console.error('Erreur de réponse du serveur:', response.status);
            }
        } catch (error) {
          console.error('Erreur:', error);
        }
      },
      async sendEmailResetPassword() {
        // Logique pour envoyer un lien de réinitialisation du mot de passe
        try{
          const response = await fetch('https://pointfinder.alwaysdata.net/send-reset-password-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              mail: this.resetEmail 
            }),
          });
          if (response.status === 200) {
            console.log('Email envoyé avec succès:');
            const data = await response.text();
            this.updatePassword(data);
          } else {
            this.toast.error("Reset password error: please enter a valid email", {
              position: "bottom-center",
              timeout: 5000,
              closeButton: "button",
            });
          }
        }
        catch (error){
          console.error('Erreur:', error);
        }
      },
      async updatePassword(newPassword){
        // Mise à jour du mot de passe en bdd une fois l'email envoyé
        try {
          const response = await fetch('https://pointfinder.alwaysdata.net/updatepwd', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              mail: this.resetEmail,
              newpwd: newPassword,
            }),
          });
          if (response.status === 200) {
            console.log(newPassword);
            this.toast.success("Password successfully updated : please check your emails", {
              position: "bottom-center",
              timeout: 5000,
              closeButton: "button",
            });
            this.showResetPasswordModal = false;
          } else {
            this.toast.error("Server error: failed to change password", {
              position: "bottom-center",
              timeout: 5000,
              closeButton: "button",
            });
          }
        } catch (error) {
          console.error('Erreur:', error);
        }
      },
    }
  };
</script>
  
<style lang="scss"> 
    .sign-view-container{
      overflow-y: hidden;
    }
    .logo {
      position: absolute;
      cursor: pointer;
      top: 1em;
      left: 1em;
      width: 10%
    }
    
    .tabs-container {
      padding: 2em;
      width: 50%;
      height: 70%;
      position: absolute;
      left: 50%;
      top: 55%;
      transform: translate(-50%, -50%);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .title-container{
      text-align: center;
    }
    
    form {
      margin: 0 auto;
      margin-top: 3em;
    }
    
    input {
      width: 100%;
      padding: 1em;
      margin-bottom: 2em;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    
    .sign-button {
      background-color: rgb(215, 157, 119);
      position: relative;
      left: 12.5%;
      color: #fff;
      padding: 1em;
      border-radius: 3px;
      cursor: pointer;
      width: 75%;
    }

    .sign-button:hover {
      background: rgb(190, 190, 190);
    }

    .forgot-password {
      font-size: 12px;
      text-decoration: none;
      color: black;
      font-weight: bold;
    }

    .forgot-password:hover {
      text-decoration: underline;
    }

    //Code css pop up 
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal {
      position: relative;
      background-color: white;
      padding: 2em;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    .toast-container {
      margin-top: 3em;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .toast-message {
      background-color: rgb(255, 255, 255);
      border: none;
      box-shadow: 0 6px 8px rgba(0,0,0,0.1);;
      color: black;
      padding: 0.8em;
      font-size: 14px;
      border-radius: 4px;
      border: 1px solid black;
      width: 75%
    }
</style>
  