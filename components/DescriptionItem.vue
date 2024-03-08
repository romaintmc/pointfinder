<template>
  <!-- Conteneur principal de la grille externe -->
  <div class="outer-grid">
    <!-- Première colonne pour le texte de présentation -->
    <div class="inner-grid text">
      <!-- Titre principal -->
      <h1>PointFinder</h1>
      <!-- Sous-titre italique -->
      <h3>Mapping Moments, Finding memories</h3>
      <!-- Paragraphe de description de l'application -->
      <p>
        Our web and mobile solution allows you to display key locations around you.
        <br />
        <br />
        <br />
        Easy to use, PointFinder offers you a personalized map ideal for helping you discover the city of your choice.
      </p>
    </div>
    <!-- Deuxième colonne pour l'image de capture d'écran de l'application -->
    <div class="inner-grid">
      <img src="@/assets/ap_glo.png" alt="Capture de l'application" class="image_temporaire">
    </div>
  </div>
</template>

<style scoped>
/* Styles pour la grille externe */
.outer-grid {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px;
}
/* Styles pour chaque colonne de la grille interne */
.inner-grid {
  margin: 10px 30px;
  padding: 20px;
  flex: 1;
  box-sizing: border-box;
  background-color: rgb(230, 230, 230);
  border: 2px solid rgb(220, 218, 218);
  border-radius: 50px;
}
/* Styles spécifiques pour l'image */
.image_temporaire {
  max-width: 100%; /* Ajuste la largeur de l'image pour s'adapter à la grille */
  height: auto;
  display: block; /* Supprime l'espace réservé sous l'image */
  margin: 0 auto; /* Centre l'image horizontalement */
  border: 2px solid rgb(229, 228, 228);
  border-radius: 20px;
}
/* Styles pour la colonne de texte */
.text {
  text-align: center;
  padding: 10px;
  flex: 1; /* Ajout de flex pour permettre au texte de prendre toute la hauteur disponible */
}
/* Styles pour le sous-titre italique */
h3 {
  font-style: italic;
}

/* Media query pour des écrans plus petits (par exemple, tablettes et téléphones) */
@media screen and (max-width: 768px) {
  .outer-grid {
    flex-direction: column;
    align-items: center;
  }
  /* Ajuste la largeur de la colonne interne à 100% */
  .inner-grid {
    width: 100%;
    margin: 10px 0;
  }
  /* Ajuste le padding de la colonne de texte */
  .text {
    padding: 10px;
  }
}
</style>
