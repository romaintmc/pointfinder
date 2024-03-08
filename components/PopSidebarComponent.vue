<template>
  <!-- Affiche le composant seulement si isVisible est true -->
  <div v-show="isVisible" class="pop-sidebar">
    <!-- Conteneur pour l'icône de fermeture -->
    <div class="images-container">
      <img src="../assets/cross.png" alt="Fermer" class="close-icon" @click="hide">
    </div>
    <!-- Conteneur pour l'icône de logo -->
    <div class="logo-container">
      <img src="../assets/icon_pointfinder.png" alt="Icon PF" class="logo-icon">
    </div>
    <!-- Titre du sidebar -->
    <div class="sidebar-title">
      <!-- Affiche le libellé ou un message par défaut si le libellé est 'nan' -->
      <h2>{{ displayLibelle }}</h2>
      <!-- Contenu du sidebar -->
      <div class="sidebar-content">
        <div class="description-content">
          <p v-if="dataRoute && dataRoute.durationInMinutes !== null">
            Travel Time: {{ dataRoute.durationInMinutes }} minutes
          </p>
          <p v-if="dataRoute && dataRoute.distanceInMeters !== null">
            Travel Distance: {{ (dataRoute.distanceInMeters / 1000).toFixed(2) }} km
          </p>
        
          <!-- Affiche les heures d'ouverture si elles ne sont pas 'nan' ou null -->
          <template v-if="description !== 'nan' && description !== null && description !== 'null' && description !== 'Yes'">
              <p> Category : <br> {{ displayDescription }} </p>
          </template>
          <template v-if="sous_description !== 'nan' && sous_description !== null && sous_description !== 'null' ">
              <p> Subcategory : <br> {{ displaySousDescription }} </p> <!-- Utilisation de la propriété calculée ici -->
          </template>
          <!-- Affiche les heures d'ouverture si elles ne sont pas 'nan' ou null -->
          <template v-if="opening_hours !== 'nan' && opening_hours !== null && opening_hours !== 'null'">
            <p> Opening hours : <br> {{ opening_hours }} </p>
          </template>
          <!-- Affiche le numéro de téléphone si ce n'est pas 'nan' ou null -->
          <template v-if="phone_number !== 'nan' && phone_number !== null && phone_number !== 'null'">
            <p> Mobile : {{ phone_number }} </p>
          </template>
          <!-- Affiche l'URL si ce n'est pas 'nan' ou null -->
          <template v-if="url !== 'nan' && url !== null && url !== 'null'">
            <p> Web site : <a :href="url" target="_blank">{{ url }}</a> </p>
          </template>
          <!-- Affiche l'accès handicapé si le handicap est boolean ou s'il n'est pas 'nan' ou null -->
          <template v-if="typeof handicap === 'boolean' || (handicap !== 'nan' && handicap !== null && handicap !== 'null')">
            <p> Disabled access :  {{ handicap ? 'Yes' : 'No' }} </p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
declare module '../store/store';
import { store } from '@/store/store';

export default defineComponent({
  props: {
    libelle: String,
    url: String,
    opening_hours: String,
    phone_number: String,
    handicap: [Boolean, String, Number],
    description: String,
    sous_description: String
  },
  
  setup(props, { emit }) {
    const dataRoute = computed(() => store.dataRoute);
    
    const isVisible = ref(false); // État de visibilité du sidebar

    // Calcule le libellé à afficher en fonction de la valeur de props.libelle
    const displayLibelle = computed(() => {
      if (props.libelle?.includes('nan')) {
        return 'Unknown name';
      }
      return props.libelle;
    });

    // Propriété calculée pour traiter description
    const displayDescription = computed(() => {
      let description = props.description;
      description = replaceUnderscores(description); // Remplace les underscores par des espaces
      if (props.description?.includes('Enclos en surface')) {
        return 'Above-ground enclosure';
      }
      else if (props.description === 'Toilettes Publiques') {
        return 'Public Toilets';
      }
      else if (props.description === 'Toilettes ERP') {
        return 'Restrooms for businesses receiving the public';
      }
      return capitalizeFirstLetter(description);
    });

    const displaySousDescription = computed(() => {
      let sous_description = replaceUnderscores(props.sous_description);
      return capitalizeFirstLetter(sous_description);
    });

    function capitalizeFirstLetter(string = '') {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function replaceUnderscores(string = '') {
      return string.replace(/_/g, ' ');
    }

    // Fonction pour afficher le sidebar
    function show() {
      isVisible.value = true;
    }

    // Fonction pour masquer le sidebar et émettre un événement 'closed'
    function hide() {
      isVisible.value = false;
      emit('closed');
    }

    return {
      isVisible,
      show,
      hide,
      capitalizeFirstLetter,
      displayLibelle,
      displayDescription,
      displaySousDescription,
      dataRoute
    };
  }
});
</script>

<style>
/* Styles du sidebar */
.pop-sidebar {
  padding: 1%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1%;
  width: 30%;
}

/* Styles pour le conteneur du logo */
.logo-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}

/* Styles pour l'icône de logo */
.logo-icon {
  width: 35%;
  height: auto;
}

/* Styles pour le conteneur d'images */
.images-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

/* Styles pour l'icône de fermeture */
.close-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-top: 1em;
}

/* Styles pour le titre du sidebar */
.sidebar-title {
  text-align: center;
  font-weight: bold;
}

/* Styles pour le contenu du sidebar */
.sidebar-content {
  padding: 2em;
  height: 80%;
}

/* Styles pour les paragraphes dans le contenu du sidebar */
.description-content p {
  background-color: rgb(241, 241, 241);
  border-radius: 1em;
  line-height: 2;
  text-align: left;
  padding: 1em;
  overflow-wrap: break-word;
}

/* Styles pour les liens dans le contenu du sidebar */
.description-content a {
  overflow-wrap: break-word; /* Assure que les liens passent à la ligne si nécessaire */
}

@media screen and (max-width: 768px) {
  .pop-sidebar {
    width: 40%; /* Par exemple, le PopSidebar prendra 100% de la largeur sur les écrans de petite taille */
  }
}

</style>
