<template>
  <!-- Conteneur de la grille externe -->
  <div class="outer-grid">
    <!-- Première colonne avec une image -->
    <div class="inner-grid">
      <img src="@/assets/image.jpeg" alt="Capture de l'application" class="image_temporaire">
    </div>
    <!-- Deuxième colonne avec du texte -->
    <div class="inner-grid text">
      <h1>Do you have some problem?</h1>
      <p>
        Carefree! We have the solution!
        <br />
        <br />
        Just watch our explanatory video!
        <br />
        <br />
        <br />
        Afterwards, our application will no longer have any secrets for you!
      </p>
    </div>
  </div>
</template>
  
<style scoped>
  /* Styles pour le conteneur de la grille externe */
  .outer-grid {
    display: flex;
    flex-wrap: wrap; /* Permet aux éléments de passer à la ligne s'ils ne rentrent pas sur une seule ligne */
    padding: 50px 20px; 
  }
  /* Styles pour chaque colonne de la grille interne */
  .inner-grid {
    border: 3px solid red;
    margin: 10px 30px ;
    padding: 20px;
    flex: 1; /* Fait en sorte que les deux éléments aient la même largeur */
    box-sizing: border-box; /* Inclut la bordure et le padding dans la largeur/hauteur totale */
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
  /* Styles pour le texte dans la deuxième colonne */
  .text {
    text-align: center;
    padding: 10px;
  }
  p {
    font-size: 1em;
  }
  /* Media query pour des écrans plus petits (par exemple, tablettes et téléphones) */
  @media screen and (max-width: 768px) {
    .outer-grid {
      flex-direction: column; /* Passe à une disposition en colonne pour des écrans plus petits */
      align-items: center; /* Centre les éléments */
      padding: 0; /* Réduire ou éliminer le padding pour maximiser l'espace disponible */
    }
    .inner-grid {
      width: 100%; /* S'assure que les éléments .inner-grid utilisent la pleine largeur */
      margin: 10px 0px; /* Ajuster les marges comme nécessaire pour l'espacement vertical */
      padding: 20px 0px; /* Réduire le padding latéral pour éviter la réduction de la largeur */
      box-sizing: border-box; 
    }
  }
</style>
  