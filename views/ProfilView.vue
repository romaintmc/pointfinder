<template>
    <div class="profile-page">
      <img class="logo" src="../assets/logo_pointfinder.png" @click="redirectMapPage"/>
      <!-- Image de profil -->
      <div class="profile-header">
        <img src="../assets/icone-utilisateur.png" alt="Profil utilisateur">
        <!-- Texte Username Profil -->
        <h2>{{ username }}'s profil</h2>
        <h3>{{ mail }}</h3>
      </div>
      <div class="logout-button">
        <button @click="logout">
          <img src="../assets/logout-xxl.png" alt="Logout"> Logout
        </button>
      </div>

      <!-- Panels pour modification de profil -->
      <div class="panel" id="changeEmail">
        <div @click="togglePanel('changeEmail')" class="panel-button">
          <img :src="activePanel === 'changeEmail' ? require('../assets/chevron-bas.png') : require('../assets/chevron-droit.png')" class="arrow-icon">
          <span>Change my email</span>
        </div>
        <div v-if="activePanel === 'changeEmail'" class="content-container">
          <form @submit.prevent="showUpdateMailModal=true">
            <input type="email" v-model="currentEmail" placeholder="Current email" required>
            <input type="email" v-model="newEmail" placeholder="New email" required>
            <input type="email" v-model="confirmEmail" placeholder="Confirm new email" required>
            <button type="submit" class="validate-button">Update email</button>
          </form>
        </div>
      </div>
      <br>
      <div class="panel" id="changePassword">
        <div @click="togglePanel('changePassword')" class="panel-button">
          <img :src="activePanel === 'changePassword' ? require('../assets/chevron-bas.png') : require('../assets/chevron-droit.png')" class="arrow-icon">
          <span>Change my password</span>
        </div>
        <div v-if="activePanel === 'changePassword'" class="content-container">
          <form @submit.prevent="showUpdatePasswordModal=true">
            <input type="email" v-model="currentEmailPassword" placeholder="Email" required>
            <input type="password" v-model="newPassword" placeholder="New password" required>
            <input type="password" v-model="confirmPassword" placeholder="Confirm new password" required>
            <button type="submit" class="validate-button">Update password</button>
          </form>
        </div>
      </div>
      <br>
      <div class="panel" id="deleteAccount">
        <div @click="togglePanel('deleteAccount')" class="panel-button">
          <img :src="activePanel === 'deleteAccount' ? require('../assets/chevron-bas.png') : require('../assets/chevron-droit.png')" class="arrow-icon">
          <span>Desactivate account</span>
        </div>
        <div v-if="activePanel === 'deleteAccount'" class="content-container">
          <form @submit.prevent="showDesactiveAccountModal=true">
            <input type="email" v-model="emailToDelete" placeholder="Your email" required>
            <input type="password" v-model="passwordToDelete" placeholder="Your password" required>
            <button type="submit" class="validate-button">Desactivate account</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Fenêtre modale pour confimer la mise à jour de l'adresse mail -->
    <div v-if="showUpdateMailModal" class="modal-overlay" @click.self="showUpdateMailModal = false">
      <div class="modal">
        <p>Are you sure you want to update your email ?</p>
        <div class="modal-actions">
            <button class="validate-button" @click="updateEmail()">Confirm update</button>
        </div>
      </div>
    </div>
    <!-- Fenêtre modale pour confirmer la mise à jour du mot de passe -->
    <div v-if="showUpdatePasswordModal" class="modal-overlay" @click.self="showUpdatePasswordModal = false">
      <div class="modal">
        <p>Are you sure you want to update your password ?</p>
        <div class="modal-actions">
          <button class="validate-button" @click="updatePassword()">Confirm update</button>
        </div>
      </div>
    </div>
    <!-- Fenêtre modale pour confimer la désactivation du compte -->
    <div v-if="showDesactiveAccountModal" class="modal-overlay" @click.self="showDesactiveAccountModal = false">
      <div class="modal">
        <p>Are you sure you want to desactivate your account ?</p>
        <div class="modal-actions">
          <button class="validate-button" @click="desactiveAccount()">Confirm desactivation</button>
        </div>
      </div>
    </div>
  </template>
  <script>
    import { useToast } from 'vue-toastification'
    export default {
        setup() {
          // Get toast interface
          const toast = useToast();

          return { toast }
        },
        data() {
          return {
              activePanel: null,
              currentEmail: '',
              newEmail: '',
              confirmEmail: '',
              currentEmailPassword: '',
              newPassword: '',
              confirmPassword: '',
              emailToDelete: '',
              passwordToDelete: '',

              showUpdatePasswordModal: false,
              showUpdateMailModal: false,
              showDesactiveAccountModal: false,

              userProfileUpdated: 0,
          };
        },
        computed: {
          username() {
            const user = JSON.parse(sessionStorage.getItem('user'));
            return user ? user.username : 'Guest';
          },
          mail() {
            this.userProfileUpdated; // Cela rend la propriété calculée dépendante de userProfileUpdated
            const user = JSON.parse(sessionStorage.getItem('user'));
            return user ? user.mail : 'No email';
          }
        },
        methods: {
          togglePanel(panelId) {
              this.activePanel = this.activePanel === panelId ? null : panelId;
          },
          async updateEmail() {
            // Logique pour mettre à jour l'email
            if(this.newEmail === this.confirmEmail){
              try {
                const response = await fetch('https://pointfinder.alwaysdata.net/updatemail', {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    mail: this.currentEmail,
                    newmail: this.newEmail,
                  }),
                });
                if (response.status === 200) {
                  console.log(this.newEmail);
                  const user = JSON.parse(sessionStorage.getItem('user'));
                  user.mail = this.newEmail; // Mise à jour de l'email avec la nouvelle valeur
                  sessionStorage.setItem('user', JSON.stringify(user)); // Sauvegarde la modification dans sessionStorage
                  this.userProfileUpdated++; /*Mettre à jour la propriété calculée pour voir directement la modification du mail
                   sans recharger la page*/

                  this.showUpdateMailModal=false;
                  this.toast.success("Email address successfully updated !", {
                    position: "top-right",
                    timeout: 5000,
                    closeButton: "button",
                  });
                } else {
                  this.toast.error("Update email error: please enter an existing email address", {
                    position: "top-right",
                    timeout: 5000,
                    closeButton: "button",
                  });
                }
                this.currentEmail=null;
                this.newEmail=null;
                this.confirmEmail=null;
              } catch (error) {
                console.error('Erreur:', error);
              }
            }
            else{
              this.toast.error("Update email error: email adresses do not match", {
                position: "top-right",
                timeout: 5000,
                closeButton: "button",
              });
            }
          },
          async updatePassword() {
            // Logique pour mettre à jour le mot de passe
            if(this.newPassword === this.confirmPassword){
              try {
                const response = await fetch('https://pointfinder.alwaysdata.net/updatepwd', {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    mail: this.currentEmailPassword,
                    newpwd: this.newPassword,
                  }),
                });
                if (response.status === 200) {
                  console.log(this.newPassword);
                  this.showUpdatePasswordModal=false;
                  this.toast.success("Password successfully updated !", {
                    position: "top-right",
                    timeout: 5000,
                    closeButton: "button",
                  });
                } else {
                  this.toast.error("Update password error: please verify the email you entered", {
                    position: "top-right",
                    timeout: 5000,
                    closeButton: "button",
                  });
                }
                this.currentEmailPassword=null;
                this.newPassword=null;
                this.confirmPassword=null;
              } catch (error) {
                console.error('Erreur:', error);
              }    
            }
            else{
              this.toast.error("Update password error: passwords do not match", {
                position: "top-right",
                timeout: 5000,
                closeButton: "button",
              });
            }
          },
          async desactiveAccount() {
              // Logique pour désactiver le compte
              try {
                const response = await fetch('https://pointfinder.alwaysdata.net/inactiveuser', {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    mail: this.emailToDelete,
                    password: this.passwordToDelete,
                  }),
                });
                if (response.status === 200) {
                  console.log("Compte suspendu");
                  this.logout();
                } else {
                  this.toast.error("Account suspension error: please enter an existing email or password", {
                    position: "top-right",
                    timeout: 5000,
                    closeButton: "button",
                  });
                }
              } catch (error) {
                console.error('Erreur:', error);
              }
          },
          redirectMapPage() {
            this.$router.push({ path: '/map' });
          },
          logout() {
            sessionStorage.removeItem('user');
            this.$router.push({ path: '/' });
          }
        }
    }
  </script>
  <style>
    .profile-page {
      padding: 10px; /* Ajoute une marge autour de toute la page */
    }
    .profile-header {
      text-align: center;
    }
    .profile-header img {
        width: 100px;
        height: 100px;
    }
    .panel {
      display: flex;
      flex-direction: column;
      margin-left: 15%;
    }
    .panel-button {
      cursor: pointer;
    }
    .content-container input {
      width: 80%;
      padding: 8px 12px;
      margin: 5px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      background-color: rgb(215, 157, 119);
      color: white;
      border: none;
      padding: 10px 20px;
      margin: 10px 0;
      cursor: pointer;
      border-radius: 5px;
    }
    /* Conteneur pour le contenu déroulant */
    .content-container {
      padding: 1em;
      margin-bottom: 1em;
    }
    .content-container button{
      display: block;
    }
    .arrow-icon {
      width: 20px;
      height: auto;
      margin-right: 10px;
    }
    .validate-button {
      transition: transform 0.3s ease;
    }
    .validate-button:hover {
      transform: scale(1.1);
      background: rgb(190, 190, 190);
    }
    .logout-button {
      position: fixed;
      top: 0;
      right: 1em;
    }
    .logout-button button {
      background-color: rgb(114, 114, 114);
      color: white;
      border: none;
      padding: 10px 12px;
      cursor: pointer;
      border-radius: 5px;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: transform 0.3s ease; /* Ajoute une transition douce */
    }
    .logout-button button:hover {
      transform: scale(1.1);
    }
    .logout-button button img {
      width: 20px;
      height: auto;
    }


  </style>
  