<template>
  <!-- Contenu principal de l'application -->
  <div class="map-page-container">
    <!-- Composant PopSidebar -->
    <PopSidebar
      v-show="!isSidebarVisible" 
      ref="popSidebarRef"
      class="popsidebar"
      :libelle="currentMarkerData.libelle"
      :url="currentMarkerData.url"
      :opening_hours="currentMarkerData.opening_hours"
      :phone_number="currentMarkerData.phone_number"
      :handicap="currentMarkerData.handicap"
      :description= "currentMarkerData.description"
      :sous_description= "currentMarkerData.sous_description"
      @closed="handlePopSidebarClosed" 
    />
    <!-- Composant Sidebar -->
    <Sidebar
      v-show="isSidebarVisible" 
      @selectedTypesUpdated="handleSelectedTypesUpdate"
      class="sidebar"
    />
    <!-- Composant MapComponent -->
    <MapComponent
      :selectedTypes="selectedTypes"
      @markerClicked="handleMarkerClick"
    />
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';

import PopSidebar from '../components/PopSidebarComponent.vue';
import Sidebar from '../components/SidebarComponent.vue';
import MapComponent from '../components/MapComponent.vue';

export default {
  name: 'App',
  components: {
    PopSidebar,
    Sidebar,
    MapComponent,
  },
  setup() {
    // Définition des types des données des marqueurs
    interface MarkerData {
      libelle: string;
      url: string;
      opening_hours: string;
      phone_number: string;
      handicap: string;
      description: string;
      sous_description: string;
    }

    // Références réactives et réactives initiales
    const isSidebarVisible = ref(true); // Par défaut, Sidebar est visible et PopSidebar ne l'est pas.
    const selectedTypes = reactive<Record<string, boolean>>({});
    const currentMarkerData = ref<MarkerData>({
      libelle: '',
      url: '',
      opening_hours: '',
      phone_number: '',
      handicap: '',
      description: '',
      sous_description: ''
    });
    const popSidebarRef = ref<{ show: () => void } | null>(null); // Référence au PopSidebar pour afficher

    // Gestionnaires d'événements
    const handleSelectedTypesUpdate = (updatedTypes: Record<string, boolean>) => {
      // Afficher Sidebar lors de la mise à jour des types sélectionnés
      isSidebarVisible.value = true;

      // Mise à jour des selectedTypes avec les types mis à jour
      Object.keys(updatedTypes).forEach((key) => {
        selectedTypes[key] = updatedTypes[key];
      });
    };

    const handlePopSidebarClosed = () => {
      // Réafficher la Sidebar lorsque PopSidebar est fermé
      isSidebarVisible.value = true;
    };

    const handleMarkerClick = (data: MarkerData) => {
      // Masquer la Sidebar et afficher PopSidebar lors du clic sur un marqueur
      isSidebarVisible.value = false;
      currentMarkerData.value = data; // Assurez-vous que cette ligne attribue correctement les données
      if (popSidebarRef.value) {
        popSidebarRef.value.show();
      }
    };

    return {
      selectedTypes,
      popSidebarRef,
      currentMarkerData,
      handleSelectedTypesUpdate,
      handleMarkerClick,
      isSidebarVisible,
      handlePopSidebarClosed
    };
  },
};
</script>

<style>
/* Styles de l'application */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Styles pour le contenu principal */
.map-page-container {
  display: flex;
  flex: 1;
  position: relative;
}

/* Styles pour la Sidebar */
.sidebar {
  z-index: 1;
  max-height: 100vh;
  overflow-y: auto;
}

/* Styles pour le PopSidebar */
.popsidebar {
  max-height: 100vh;
  overflow-y: auto;
}

</style>
