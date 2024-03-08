<template>
  <!-- Bouton de la carte -->
  <div class="map-button" @mouseover="showMenu" @mouseleave="hideMenu">
    <img src="../assets/user.png" alt="User" class="user-icon" @click="goToProfile">
    <!-- Contenu du menu -->
    <div v-show="menuVisible" class="menu-content">
      <div class="texte">
        <p><strong>{{ username }}</strong><br>{{ mail }}</p>
      </div>
      <img src="../assets/logout.png" alt="Logout" class="logout-icon" @click="logout">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    // Variable pour contrôler la visibilité du menu
    const menuVisible = ref(false);

    // Afficher le menu
    const showMenu = () => {
      menuVisible.value = true;
    };

    // Masquer le menu
    const hideMenu = () => {
      menuVisible.value = false;
    };

    return { showMenu, hideMenu, menuVisible };
  },
  computed: {
    username() {
      const user = JSON.parse(sessionStorage.getItem('user') || '{}');
      return user ? user.username : 'Guest';
    },
    mail() {
      const user = JSON.parse(sessionStorage.getItem('user') || '{}');
      return user ? user.mail : 'No email';
    }
  },
  methods: {
    // Naviguer vers le profil
    goToProfile() {
      const user = JSON.parse(sessionStorage.getItem('user') || '{}');
      if(user.admin)
        this.$router.push('/admin');
      else
        this.$router.push('/profil');
    },
    // Déconnexion
    logout() {
      sessionStorage.removeItem('user');
      this.$router.push({ path: '/' });
    },
  },
});
</script>

<style scoped>
/* Style du bouton de la carte */
.map-button {
  position: absolute;
  top: 2%;
  right: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  padding: 1em 1em;
  border-radius: 2em;
  z-index: 1000;
  cursor: pointer;
}

/* Icônes */
.user-icon, .logout-icon {
  cursor: pointer;
  width: 2em;
  height: 2em;
}

/* Texte dans le menu */
.texte {
  padding: 0 10px;
  text-align: center;
  cursor: default;
}

/* Contenu du menu */
.menu-content {
  display: flex;
  flex-direction: row; /* Changé de colonne à rangée */
  align-items: center;
  justify-content: space-around; /* Assure un espacement uniforme */
}

/* Espacement entre les éléments du menu */
.menu-content .texte, .menu-content .logout-icon {
  margin-left: 10px;
}
</style>
