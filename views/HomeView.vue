<template>
  <!-- Inclusion du composant Bandeau -->
  <Bandeau />
  <!-- Conteneur de grille pour les différents composants -->
  <div class="grid-container">
    <!-- Grille pour le composant Banniere -->
    <div class="grid-item-banniere">
      <Banniere />
    </div>
    <!-- Grille pour le composant Description -->
    <div class="grid-item" id="description">
      <Description />
    </div>
    <!-- Grille pour le composant Tutoriel -->
    <div class="grid-item" id="tutoriel">
      <Tutoriel />
    </div>
    <!-- Grille pour le composant Team -->
    <div class="grid-item" id="equipe">
      <Team />
    </div>
    <!-- Grille pour le composant Contact -->
    <div class="grid-item" id="contact">
      <Contact />
    </div>
  </div>
</template>

<script lang="ts">
  // Importation des composants nécessaires
  import Bandeau from '../components/HeaderItem.vue';
  import Description from '../components/DescriptionItem.vue';
  import Banniere from '../components/BanniereItem.vue';
  import Tutoriel from '../components/TutoItem.vue';
  import Team from '../components/TeamItem.vue';
  import Contact from '../components/ContactItem.vue';

  export default {
    components: {
      Bandeau, // Incluez votre composant d'en-tête dans la liste des composants utilisés
      Banniere,
      Description,
      Tutoriel,
      Team,
      Contact,
    },
  }
</script>

<style scoped>
/* Styles pour le conteneur de grille principale */
.grid-container {
  min-height: 100vh; /* La grille occupe au moins toute la hauteur de la vue */
}
/* Styles pour la grille du composant Banniere */
.grid-item-banniere {
  display: flex;
  flex-direction: column;
}
/* Styles pour la grille des autres composants (Description, Tutoriel, Team, Contact) */
.grid-item {
  display: flex;
  flex-direction: column;
  padding: 40px; /* Marge intérieur */
  background-color: rgb(243, 241, 241);
}

/* Styles spécifiques pour la mise en page responsive */
@media (max-width: 1000px) {
  /* Ajoutez des styles spécifiques pour les écrans plus petits si nécessaire */
}
</style>
