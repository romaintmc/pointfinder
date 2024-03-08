<template>
  <div>
    <!-- Titre de la section "Team" -->
    <h1>Team</h1>
    <!-- Grille d'images pour afficher les membres de l'équipe -->
    <div class="image-grid">
      <!-- Membre de l'équipe avec sa photo, nom et rôle -->
      <div class="image-item">
        <img src="@/assets/nous/marion.png" alt="Photo de Marion" class="photo_equipe">
        <h2> Marion DEFFEE</h2> 
        <p>Product Owner / Front-end Web Developer</p>
      </div>

      <div class="image-item">
        <img src="@/assets/nous/romain.png" alt="Photo de Romain" class="photo_equipe">
        <h2>Romain TAMIC</h2>
        <p>Back-End Developer</p>
      </div>

      <div class="image-item">
        <img src="@/assets/nous/terence.png" alt="Photo de Térence" class="photo_equipe">
        <h2> Térence ROUSIC </h2> 
        <p>Front-end Web Developer</p>
      </div>

      <div class="image-item">
        <img src="@/assets/nous/delpin.png" alt="Photo de Delphine" class="photo_equipe">
        <h2> Delphine ALLANO </h2>
        <p> Front-end Mobile Developer</p>
      </div>
    </div>
  </div>
</template>

<style>
  /* Styles pour la grille d'images de l'équipe */
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    text-align: center;
    margin: 0 auto; /* Centre la grille et réduit l'impact des marges sur la largeur des enfants */
    padding: 0 20px; /* Ajoute un padding pour garder un espacement au lieu d'une marge */
    max-width: calc(100% - 40px); /* Ajuste la largeur maximale pour tenir compte du padding */
  }

  /* Styles pour chaque élément de la grille (membre de l'équipe) */
    .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    text-align: center;
    margin: 0 auto; /* Centre la grille et réduit l'impact des marges sur la largeur des enfants */
    padding: 0 20px; /* Ajoute un padding pour garder un espacement au lieu d'une marge */
    max-width: calc(100% - 40px); /* Ajuste la largeur maximale pour tenir compte du padding */
  }

  /* Styles pour les photos des membres de l'équipe */
  .photo_equipe {
    max-width: 90%; /* La largeur de l'image ne dépasse pas la largeur de son conteneur */
    height: auto; /* Ajuste automatiquement la hauteur en fonction de la largeur */
    border-radius: 4%;
    border: 2px solid rgb(155, 153, 153);
  }
  /* Styles pour les titres des membres de l'équipe */  
  h2 {
    font-weight: bold; /* Police en gras pour les noms des membres de l'équipe */
  }

  @media screen and (max-width: 500px) {
    .image-grid {
      grid-template-columns: 1fr; /* Une seule colonne pour petits écrans */
      padding: 0; /* Éliminez tout padding qui pourrait réduire la largeur disponible */
      margin: 0; /* Éliminez ou ajustez les marges si nécessaire */
    }
    .image-item {
      /* Ajustements optionnels ici, si nécessaire */
      margin: 10px 0; /* Assurez un espacement vertical sans réduire la largeur */
    }
  }
</style>
