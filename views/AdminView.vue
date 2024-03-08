    <template>
        <div class="admin-page-container">
            <img class="logo" src="../assets/logo_pointfinder.png" @click="redirectMapPage"/>
            <div class="logout-button">
                <button @click="logout">
                <img src="../assets/logout-xxl.png" alt="Logout"> Logout
                </button>
            </div>
            <div class="search-container">
                <input type="text" v-model="searchQuery" placeholder="Search by username or email..." @input="filterUsers">
            </div>
            <div class="cards-container">
                <div class="user-card" v-for="user in filteredUsers" :key="user.originalMail" :class="{'inactive-user': user.active === 0}">
                    <img class="user-image" src="../assets/icone-utilisateur.png"/>
                    <img class="delete-icon" src="../assets/cross.png" @click="promptDeleteUser(user)"/>
                    <!-- Affichage conditionnel basé sur l'état d'édition -->
                    <div v-if="!editingUsers[user._uid.toString()]" class="user-info">
                        <h3>{{ user.login }}</h3>
                        <p>{{ user.mail }}</p>
                    </div>
                    <div v-else class="user-edit-form">
                        <input v-model="user.login" type="text">
                        <input v-model="user.mail" type="email">
                    </div>
                    <div class="card-buttons">
                        <button class="activate-btn" v-if="user.active === 0" @click="promptActivateUser(user)">Activate User</button>
                        <button class="cancel-btn" v-if="editingUsers[user._uid.toString()]" @click="cancelEdit(user)">Cancel</button>
                        <button class="edit-btn" v-if="user.active !== 0" :class="{ 'editing': editingUsers[user._uid.toString()] }" @click="toggleEdit(user)">
                            {{ editingUsers[user._uid.toString()] ? 'Save User' : 'Edit User' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fenêtre modale pour supprimer un utilisateur -->
        <div v-if="showDeleteUserModal" class="modal-overlay" @click.self="showDeleteUserModal = false">
            <div class="modal">
                <p>Are you sure you want to delete definitively this user:</p>
                <p><strong>{{ selectedUserForDeletion ? selectedUserForDeletion.login : '' }}</strong></p>
                <div class="modal-actions">
                    <button @click="deleteUser()">Delete User</button>
                </div>
            </div>
        </div>
        <!-- Fenêtre modale pour mettre à jour un utilisateur -->
        <div v-if="showUpdateUserModal" class="modal-overlay" @click.self="showUpdateUserModal = false">
            <div class="modal">
                <p>Are you sure you want to update this user:</p>
                <p><strong>{{ originalValues[selectedUserForUpdate?._uid.toString()] ? originalValues[selectedUserForUpdate._uid.toString()].login : '' }}</strong></p>
                <div class="modal-actions">
                    <button @click="updateMailLogin()">Update User</button>
                </div>
            </div>
        </div>
        <!-- Fenêtre modale pour activer un utilisateur -->
        <div v-if="showActivateUserModal" class="modal-overlay" @click.self="showActivateUserModal = false">
            <div class="modal">
                <p>Are you sure you want to activate this user:</p>
                <p><strong>{{ selectedUserForActive ? selectedUserForActive.login : '' }}</strong></p>
                <div class="modal-actions">
                    <button @click="activateUser()">Activate User</button>
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
                    users: [],
                    filteredUsers: [],
                    searchQuery: '',
                    editingUsers: {},
                    originalValues: {},

                    selectedUserForDeletion: null,
                    showDeleteUserModal: false,
                    selectedUserForUpdate: null,
                    showUpdateUserModal: false,
                    selectedUserForActive: null,
                    showActivateUserModal: false
                };
            },
            mounted() {
                this.fetchUsers();
            },
            methods: {
                async fetchUsers() {
                    try {
                        const response = await fetch('https://pointfinder.alwaysdata.net/receiveusers', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                choice: 2
                            }),
                        });
                        if (response.status === 200) {
                            console.log('Liste des utilisateurs récupérée');
                            const data = await response.json();
                            this.users = data.map((user, index) => ({
                                ...user,
                                originalMail: user.mail,
                                _uid: index // Génère un ID temporaire ou utilisez une autre méthode pour générer des ID uniques
                            }));
                            this.filteredUsers = this.users;
                        } else {
                            console.log('Erreur lors de la récupération des utilisateurs');
                        }
                    } catch (error) {
                        console.error("Erreur :", error);
                    }
                },
                filterUsers() {
                    if (!this.searchQuery) {
                        this.filteredUsers = this.users;
                    } else {
                        this.filteredUsers = this.users.filter(user => 
                            user.login.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            user.mail.toLowerCase().includes(this.searchQuery.toLowerCase())
                        );
                    }
                },
                promptActivateUser(user) {
                    this.selectedUserForActive = user;
                    this.showActivateUserModal = true;
                },
                async activateUser() {
                    const user = this.selectedUserForActive;
                    try {
                        const response = await fetch('https://pointfinder.alwaysdata.net/activeuser', {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                mail: user.mail,
                            }),
                        });
                        if (response.status === 200) {
                            console.log('Utilisateur activé avec succès');
                            this.toast.success("User successfully activated !", {
                                position: "top-right",
                                timeout: 5000,
                                closeButton: "button",
                            });
                            this.showActivateUserModal = false; // Fermez la fenêtre modale
                            this.selectedUserForActive = null; // Réinitialisez la sélection
                            this.fetchUsers(); // Rechargez les utilisateurs pour mettre à jour l'affichage
                        } else {
                            console.log('Erreur lors de l\'activation de l\'utilisateur');
                            this.toast.error("Error activating user.", { 
                                position: "top-right", 
                                timeout: 5000, 
                                closeButton: "button",
                            });
                        }
                    } catch (error) {
                        console.error('Erreur lors de l\'activation:', error);
                        this.toast.error("Error activating user.", { 
                            position: "top-right", 
                            timeout: 5000, 
                            closeButton: "button",
                        });
                    }
                },
                toggleEdit(user) {
                    const userKey = user._uid.toString();
                    if (this.editingUsers[userKey]) {
                        // Si l'utilisateur est déjà en mode édition, préparez pour mettre à jour
                        this.selectedUserForUpdate = { ...user }; // Faites une copie de l'utilisateur
                        this.showUpdateUserModal = true;
                    } else {
                        // Sinon, entrez en mode édition
                        this.originalValues[userKey] = { ...user }; // Faites une copie de l'utilisateur pour restauration
                        this.editingUsers[userKey] = true; // Pas besoin de Vue.set, l'assignation directe devrait être réactive
                    }
                },
                cancelEdit(user) {
                    const userKey = user._uid.toString();
                    if (this.originalValues[userKey]) {
                        Object.assign(user, this.originalValues[userKey]); // Restaurez les valeurs originales
                        delete this.editingUsers[userKey]; // Sortez du mode édition
                    }
                },
                promptDeleteUser(user) {
                    this.selectedUserForDeletion = user;
                    this.showDeleteUserModal = true;
                },
                async deleteUser() {
                    const user = this.selectedUserForDeletion;
                    try {
                        const response = await fetch('https://pointfinder.alwaysdata.net/deleteuser', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                mail: user.mail,
                            }),
                        });
                        if (response.status === 200) {
                            console.log(`Suppression de l'utilisateur ${this.selectedUserForDeletion.login}`);
                            this.showDeleteUserModal = false; // Fermez la fenêtre modale
                            this.selectedUserForDeletion = null; // Réinitialisez la sélection
                            this.fetchUsers(); //Recharger la liste des utilisateurs après suppression
                            this.toast.success("User successfully deleted !", {
                                position: "top-right",
                                timeout: 5000,
                                closeButton: "button",
                            });
                        } else {
                            this.toast.error("Failed to delete user", { 
                                position: "top-right", 
                                timeout: 5000, 
                                closeButton: "button", });
                        }
                    } catch (error) {
                        console.error('Erreur:', error);
                    }    
                },
                async updateMailLogin() {
                    const userToUpdate = this.selectedUserForUpdate;
                    const userKey = userToUpdate._uid.toString();

                    if (!userToUpdate.mail || !userToUpdate.originalMail || !userToUpdate.login) {
                        this.toast.error("Missing user information for update.", { position: "top-right", timeout: 5000, closeButton: "button", });
                        return;
                    }

                    try {
                        const response = await fetch('https://pointfinder.alwaysdata.net/updatemaillogin', {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json', },
                            body: JSON.stringify({
                                newlogin: userToUpdate.login,
                                mail: userToUpdate.originalMail,
                                newmail: userToUpdate.mail,
                            }),
                        });

                        if (response.status === 200) {
                            console.log("User update successful.");
                            // Réinitialiser l'état d'édition pour l'utilisateur mis à jour
                            delete this.editingUsers[userKey];
                            this.showUpdateUserModal = false;
                            this.selectedUserForUpdate = null;
                            this.toast.success("User successfully updated!", { position: "top-right", timeout: 5000, closeButton: "button"});
                            
                            // Recharger la liste des utilisateurs pour afficher les modifications
                            await this.fetchUsers(); 

                        } else {
                            console.error("Error updating user.");
                            this.toast.error("Failed to update user.", { position: "top-right", timeout: 5000, closeButton: "button"});
                        }
                    } catch (error) {
                        console.error("Update error:", error);
                        this.toast.error("Update failed due to an error.", { position: "top-right", timeout: 5000, closeButton: "button"});
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
        .cards-container {
            display: flex;
            flex-direction: column;
            align-items: center; /* Centre les enfants horizontalement dans le conteneur */
            margin-top: 1em;
        }
        .logout-button {
            position: fixed;
            top: 0;
            right: 1em;
        }
        .logout-button button:hover {
            background-color: red;
        }
        .search-container {
            display: flex;
            justify-content: center;
            margin-top: 2em;
        }

        .search-container input {
            width: 50%;
            border: 1px solid #ddd;
            border-radius: 1em;
        }
        .user-card {
            position:relative;
            margin-top: 1em;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 0.5em;
            width: 40%;
            height: 4em;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .inactive-user {
            background-color: #e0e0e0; /* Gris clair */
            color: #9e9e9e; /* Texte en gris pour indiquer l'inactivité */
        }
        .user-image {
            width: 4em;
            height: 4em;
            margin-right: 2em;
        }
        .user-info {
            text-align: left;
            flex-grow: 1;
        }
        .user-edit-form {
            display: flex;
            flex-direction: column;
            width: 40%; 
        }
        .user-edit-form input{
            padding: 0.5em;
            margin-bottom: 0.5em;
        }
        .card-buttons {
            position: absolute;
            bottom: 0;
            right: 0.5em; /* Petit espace de droite */
            
        }
        .delete-icon {
            position: absolute;
            top: 0.5em;
            right: 0.5em;
            cursor: pointer;
            width: 1em; /* Ajustez selon la taille de votre icône */
            height: 1em;
        }
        .edit-btn {
            padding: 10px 15px;
            background-color: rgb(164, 164, 164);
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 1em;
        }
        .edit-btn.editing {
            background-color: rgb(0, 160, 0); /* Couleur pour le mode "Save" */
        }
        .cancel-btn {
            background-color: #f44336;
            margin-right: 10px;
        }
        .activate-btn {
            padding: 10px 15px;
            background-color: #4CAF50; /* Vert */
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 1em;
        }

        /*Style css pour les fenetre pop-up*/
        .modal p {
            text-align: center; 
        }
        .modal-actions {
            display: flex;
            justify-content: center;
        }
        .modal-actions button {
            font-size: 1em;
        }
        
    </style>
