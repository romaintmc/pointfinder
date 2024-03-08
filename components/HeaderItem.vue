<template>
  <!-- Header principal avec trois sections -->
  <header ref="header" class="header" :class="{ 'gray-header': isScrolled }">
    <div class="header-section section-1">
      <!-- Contenu première section (logo)-->
      <img src="@/assets/icon_pointfinder.png" alt="Logo" class="image-modifiee" />
    </div>
    <div class="header-section section-2">
      <!-- Contenu deuxième section (ancrage) -->
      <a href="#description">Project</a>
      <a href="#equipe">About Us</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="header-section section-3">
      <!-- Contenu troisième section (bouton d'accès à la page de login) -->
      <button class="access-button" @click="redirect">Access to the Application</button> 
    </div>
  </header> 
</template>

<script>
  export default {
    data() {
      return {
        isScrolled: false,
        showParametersButton: false
      };
    },
    created() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            this.showParametersButton = true;
        }
    },
    mounted() {
      // Ajout d'un écouteur d'événements de défilement lors de la création de la fenêtre
      window.addEventListener('scroll', this.handleScroll); 
    },
    unmounted() {
      // Retire l'écouteur d'événements de défilement lors de la destruction de la fenêtre
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        // Met à jour la variable isScrolled en fonction de la position de défilement
        this.isScrolled = window.scrollY > 700; //ajuster x en fonction du scroll
      },
      redirect(){
        // Redirige vers la route nommée 'sign' lorsque le bouton est cliqué
        this.$router.push({path: '/sign'})
      }
    }
  };
</script>

<style>
  /* Header */
  .gray-header {
    background-color: rgb(218, 218, 218); /* Couleur de fond, lorsque la classe supplémentaire 'gray-header' est présente */
    transition: 0.4s; /* Transition douce de 0.4 seconde => animation fluide des changements */

  }
  .header {
    display: flex; /* Utilise la disposition flexible (flexbox) pour le conteneur d'en-tête */
    position: fixed; /* Fixe l'en-tête en haut de la fenêtre, même lors du défilement */
    color: #000000; /* Couleur du texte */
    width: 100%; /* La largeur de l'en-tête est de 100% de la largeur de la fenêtre */
    z-index: 1; /* Valeur de z-index élevée pour s'assurer que l'en-tête est au-dessus des autres éléments */
    text-align: center; /* Centre le texte horizontalement dans l'en-tête */
    border-bottom: rgba(211, 211, 211, 0.824) bold 2px; /* Bordure en bas de l'en-tête avec une couleur partiellement transparente */
    border-top: lightgray bold 2px; /* Bordure en haut de l'en-tête avec une couleur légèrement grise et en gras */
    justify-content: space-between; /* Espace uniforme entre les éléments enfants de l'en-tête */
    padding: 10px; /* Ajout d'espace intérieur autour du contenu de l'en-tête */
  }
  .header:hover{
    background-color: rgb(218, 218, 218);
    transition: 0.5s;
  }
  /* Styles pour chaque section de l'en-tête */
  .header-section {
    text-align: center;
    align-items: center;
    margin: 10px; /* Ajout d'espace extérieur de la section */
  }
  .header-section.section-1 {
    text-align: left;
    flex: 1; /* Utilisez flex pour laisser la première section prendre de l'espace */
  }
  .header-section.section-3 {
    text-align: right; /* Assure que les éléments sont alignés à droite */
    flex: 1;
    display: flex;
    justify-content: flex-end; /* Alignement des éléments à l'extrême droite */
    width: 100%; /* Assure que la section prend toute la largeur */
  }
  /*LOGO*/
  .image-modifiee {
    max-width: 10%; /* Ajuste la largeur de l'image en fonction de la largeur du contenant */
    height: auto; /* Garantit que les proportions de l'image sont conservées */
  }

  /* Navigation */
  .header-section.section-2 a, .access-button{
    color: #000000;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
  }
  .header-section.section-2 a {
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    margin: 5px; /* espace entre les liens */
  }
  .access-button{
    cursor: pointer;
    background-color : rgb(215, 157, 119);
    margin:  5px 50px 0 0;
    padding: 10px 20px 10px 20px;
    border: 2px solid rgb(218, 218, 218);
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  .header-section.section-2 a:hover, .access-button:hover{
    background: rgb(190, 190, 190);
  }
  
  /* Styles spécifiques pour la mise en page responsive */
  @media (max-width: 1000px) {
    .header {
      flex-direction: column;
    }
    .header-section {
      width: 100%;
    }
  }
</style>


