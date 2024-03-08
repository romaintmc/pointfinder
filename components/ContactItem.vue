<template>
  <!-- Conteneur principal de la grille externe -->
  <div class="outer-grid">
    <!-- Première colonne pour afficher des informations de contact -->
    <div class="inner-grid content">
      <!-- Premier élément de grille pour le titre -->
      <div class="grid-item1">
        <h1>Contact us</h1>
      </div>
      <!-- Deuxième élément de grille pour l'adresse e-mail -->
      <div class="grid-item2">
        <div class="sub-grid">
          <div class="image-container">
            <img src="../assets/mail.png" alt="Logo Mail" class="logo-mail">
          </div>
        </div>
        <div class="sub-grid">
          <p>Mail : pointfinder.projet@gmail.com</p>
        </div>
      </div>
      <!-- Troisième élément de grille pour le numéro de téléphone -->
      <div class="grid-item2">
        <div class="sub-grid">
          <div class="image-container">
            <img src="../assets/telephone.png" alt="Logo Mail" class="logo-telephone">
          </div>
        </div>
        <div class="sub-grid">
          <p>Phone Number : 06 46 74 73 59</p>
        </div>
      </div>
      <!-- Quatrième élément de grille pour une description -->
      <div class="grid-item1">
        <p>Based in Brest (29), our goal is to meet your needs.</p>
      </div>
    </div>
    <!-- Deuxième colonne pour le formulaire de contact -->
    <div class="inner-grid formuls">
      <!-- Formulaire avec des champs pour le nom, prénom, e-mail, téléphone, sujet, et message -->
      <form @submit.prevent="submitForm">
        <label for="name">First name: *</label>
        <input type="text" id="name" v-model="first_name" required>
        <label for="prenom">Last Name: *</label>
        <input type="text" id="prenom" v-model="last_name" required>
        <label for="email">Email: *</label>
        <input type="email" id="email" v-model="email" required>
        <label for="Sujet">Subject: *</label>
        <input id="sujet" v-model="subject" required>
        <label for="message">Message: *</label>
        <textarea id="message" v-model="message" required></textarea>
        <button class="button-form-contact" type="submit">SEND</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';
export default {
  setup() {
      // Get toast interface
      const toast = useToast();

      return { toast }
    },
  data() {
    // Données du formulaire
    return {
      first_name: '',
      last_name: '',
      email: '',
      subject: '',
      message: '',
      formSubmitted: false,
    };
  },
  methods: {
    // Méthode appelée lors de la soumission du formulaire
    async submitForm() {
      try{
          const response = await fetch('https://pointfinder.alwaysdata.net/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              first_name: this.first_name, 
              last_name: this.last_name,
              object: this.subject,
              body: this.message,
              mail: this.email
            }),
          });
          if (response.status === 200) {
            console.log('Email envoyé avec succès:');
            this.toast.success("Email sent successfully !", {
              position: "bottom-center",
              timeout: 3000,
              closeButton: "button",
            });
          } else {
            this.toast.error("Failed to sent email", {
              position: "bottom-center",
              timeout: 3000,
              closeButton: "button",
            });
          }
        }
        catch (error){
          this.toast.error("Failed to sent email", {
              position: "bottom-center",
              timeout: 3000,
              closeButton: "button",
            });
        }

      // Réinitialise le formulaire et affiche un message de confirmation
      this.last_name = '';
      this.first_name = '';
      this.email = '';
      this.phone = '';
      this.subject = '';
      this.message = '';
    },
  },
};
</script>

<style scoped>
  /* Styles pour la grille externe */
  .outer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    padding: 30px 20px 30px 20px;
    border-radius: 20px;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }
  /* Styles pour chaque colonne de la grille interne */
  .inner-grid {
    margin: 30px;
    padding: 20px;
    border-radius: 20px;
    flex: 1;
    box-sizing: border-box;
  }
  /* Styles pour la partie "content" (informations de contact) */
  .content {
    display: flex;
    color: black;
    background-color: rgb(230, 230, 230);
    border: 2px solid rgb(229, 228, 228);
    border-radius: 50px;
    flex-direction: column;
  }
  /* Styles pour le deuxième élément de grille (grid-item2) */
  .grid-item2 {
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
  /* Styles pour chaque sous-grille (sub-grid) */
  .sub-grid {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  /* Styles pour les images dans la grille */
  .image-container {
    max-width: 50px;
  }
  /* Styles pour les logos de mail et de téléphone */
  .logo-mail,
  .logo-telephone {
    max-width: 100%;
    height: auto;
  }
  /* Styles pour le titre "h1" */
  h1 {
    font-weight: bold;
  }
  /* Styles pour les paragraphes dans grid-item1 */
  .grid-item1 p {
    font-style: italic;
  }
  /* Styles pour la partie "formuls" (formulaire de contact) */
  .formuls {
    flex: 1;
    max-width: 400px;
    margin: 0 auto;
  }
  /* Styles pour le formulaire */
  form {
    padding: 30px;
    background-color: rgb(230, 230, 230);
    border-radius: 50px;
    border: 2px solid rgb(220, 218, 218);
  }
  /* Styles pour les labels, les inputs et le textarea dans le formulaire */
  label,
  input,
  textarea {
    height: 30px;
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
  }
  /* Styles spécifiques pour input et textarea */
  input,
  textarea {
    background-color: white;
    border-radius: 4px;
    border: 2px solid lightgray;
    max-width: 300px; /* ou ajustez la largeur maximale en fonction de vos besoins */
    width: 93.5%; /* Assurez-vous que la largeur s'adapte à la grille parente si nécessaire */
  }
  /* Styles pour textarea spécifique */
  textarea {
   height: 70px;
  }
  /* Styles pour le bouton de soumission du formulaire */
  .button-form-contact {
    background-color: rgb(215, 157, 119);
    border-radius: 4px;
    color: black;
    padding: 10px 15px;
    cursor: pointer;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
  }
  .button-form-contact:hover {
    background-color: rgb(164, 164, 164);
  }
  /* Media query pour des écrans plus petits (par exemple, tablettes et téléphones) */
  @media screen and (max-width: 768px) {
    .inner-grid {
      flex-direction: column;
    }
  }
</style>
