<template>
  <!-- Conteneur principal pour les images de la bannière -->
  <div class="image-container">
    <!-- Image de fond -->
    <img src="@/assets/banniere/fond.png" alt="Fond" class="fond">
    <!-- Image de texture -->
    <img src="@/assets/banniere/texture.png" alt="Texture" class="texture">
    <!-- Image du logo et du slogan -->
    <img src="@/assets/banniere/logo_slog2.svg" alt="Logo et Slogan" class="texte">
  </div>
</template>

<style scoped>
  /* Styles pour le conteneur d'images */
  .image-container {
    display: inline-block;
    position: relative;
    z-index: 0;
    max-width: 100%; /* Assure que le conteneur ne dépasse pas la largeur de son parent */
    height: 800px;
    max-height: 100vh; /* Limite la hauteur à 100 % de la hauteur de la fenêtre */
    overflow: hidden; /* Cache tout contenu débordant du conteneur */
  }
  /* Styles pour toutes les images à l'intérieur du conteneur */
  .image-container img {
    width: 100%;
    height: 100%;
  }
  /* Styles pour toutes les images à l'intérieur du conteneur */
  .fond,
  .texture,
  .texte {
    position: absolute;
  }
  /* Styles spécifiques pour chaque image superposée */
  /* Styles pour l'image de fond */
  .fond {
    z-index: 1;
    top: 0;
    left: 0;
  }
  /* Styles pour l'image de texture */
  .texture {
    z-index: 2;
    top: 0;
    left: 0;
    opacity: 0.4;
  }
  /* Styles pour l'image du logo et du slogan */
  .texte {
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%; /* Réduisez la largeur de l'image à 50% */
    max-width: 700px; /* Définissez une largeur maximale si nécessaire */
    height: auto; /* Ajustez la hauteur automatiquement en fonction de la largeur */
    max-height: 200px;
  }
</style>