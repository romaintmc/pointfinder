<template>
  <!-- Conteneur de la carte -->
  <div ref="mapContainer" class="map-container">
      <!-- Bouton pour centrer la carte sur le marqueur utilisateur -->
      <img src="../assets/center-icon.png" alt="Center Map" class="center-icon" @click="centerMapOnUser" /> 
  </div>
  <!-- Composant du bouton de la carte -->
  <MapButtonComponent />
</template>

<script lang="ts">
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';
  import { defineComponent, onMounted, ref, watch } from 'vue';
  declare module '@/store/store';
  import { store } from '@/store/store'; // Ajustez le chemin selon votre structure de répertoire

  import MapButtonComponent from './MapButtonComponent.vue';

  export default defineComponent({
    components: { MapButtonComponent },
    methods: {
      goToProfile() {
        // Logique pour aller à la page de profil
        const user = JSON.parse(sessionStorage.getItem('user') || '{}');
        if(user.admin == true)
          this.$router.push('/admin');
        else
          this.$router.push('/profil');
      },
      logout() {
        sessionStorage.removeItem('user');
        this.$router.push({ path: '/' });
      },      
    },
    props: {
      selectedTypes: Object as () => Record<string, boolean>
    },
    emits: ['markerClicked'], // Événements émis par ce composant
    setup(props, { emit }) {
      
      const mapContainer = ref(null);
      let map: L.Map | null = null;
      let userMarker: L.Marker | null = null;
      let markers = ref<L.Marker[]>([]);
      const markersData = new Map<L.Marker, StructData>(); // Données des marqueurs

      let currentRoute: L.Polyline | null = null; //Référence d'itinéraire pour stocker l'itinéraire actuel
      const handleClearRoute = () => {
        if (currentRoute !== null) {
            currentRoute.remove();
            currentRoute = null;
        }
      }
      // Interface des données de structure
      interface StructData {
        libelle: string;
        latitude: number;
        longitude: number;
        url: string;
        opening_hours: string;
        phone_number: string;
        handicap: string;
        description: string;
        sous_description: string;
      }

      // Cette correspondance relie chaque intérêt à son id_type.
      const interestIds: Record<string, number> = {
        'Restaurant': 1,
        'Health': 2,
        'Cinema': 3,
        'Parking': 4,
        'Shop': 5,
        'Petrol station': 6,
        'Toilets': 7,
        'Hotel': 8,
      };

      // Icône pour position user
      const user_marker = L.icon({
        iconUrl: 'user-marker.png', // Chemin vers l'icône personnalisée pour le marqueur utilisateur
        iconSize: [20, 20], // Taille de l'icône
        iconAnchor: [10, 10], // Point d'ancrage de l'icône
      });

      // Centrer la carte sur le marqueur utilisateur
      const centerMapOnUser = () => {
        if (map && userMarker) {
          map.setView(userMarker.getLatLng());
        }
      };

      // Icône personnalisée pour les marqueurs
      const baliseIcon = L.icon({
        iconUrl: 'marker-icon.png',
        iconSize: [25, 25],
        iconAnchor: [12, 41],
      });

      // Fonction pour charger les données et les mettre en cache si nécessaire
    const loadData = async (id_type: number) => {
      // Vérifier si les données pour cet id_type sont déjà en cache
      const cachedData = localStorage.getItem(`data_${id_type}`);
      if (cachedData) {
        try {
          // Si des données sont trouvées en cache, les parse et les retourner
          return JSON.parse(cachedData);
        } catch (error) {
          console.error("Error parsing cached data:", error);
        }
      }
      // Si aucune donnée n'est trouvée en cache, fetcher les données depuis le serveur
      try {
        const response = await fetch("https://pointfinder.alwaysdata.net/interets", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'code_postal': '29200',
            'id_type': id_type,
          })
        });
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        // Mettre les nouvelles données en cache pour une utilisation future
        localStorage.setItem(`data_${id_type}`, JSON.stringify(data));
        return data;
      } catch (error) {
        console.error("Error loading data:", error);
        return [];
      }
    };

      // Initialiser la carte
      const initMap = () => {
        if (mapContainer.value) {
          map = L.map(mapContainer.value).setView([48.390394, -4.486076], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'PointFinder&copy;'
          }).addTo(map);

          // Obtenir la position de l'utilisateur et placer un marqueur sur la carte
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            userMarker = L.marker([latitude, longitude], { icon: user_marker }).addTo(map!);
            userMarker.bindPopup("You are here").openPopup();
          });
        }
      };

      // Mettre à jour la carte avec les marqueurs
    const updateMap = async () => {
      markers.value.forEach(marker => {
        marker.remove();
      });
      markers.value = [];
      for (const [interest, isChecked] of Object.entries(props.selectedTypes ?? {})) {
        if (isChecked) {
          const id_type = interestIds[interest];
          if (id_type) {
            const data: StructData[] = await loadData(id_type);
            data.forEach(({ libelle, latitude, longitude, url, opening_hours, phone_number, handicap, description, sous_description }) => {
              const marker = L.marker([latitude, longitude], { icon: baliseIcon }).addTo(map!);
              markers.value.push(marker);
              markersData.set(marker, { libelle, latitude, longitude, url, opening_hours, phone_number, handicap, description, sous_description });
              marker.on('click', async () => {
                const markerData = markersData.get(marker);
                if(userMarker && map){
                  const result = await addRoute(userMarker.getLatLng(), marker.getLatLng());
                  if (result) {
                    store.dataRoute = result;
                  } else {
                    console.error("addRoute n'a pas retourné de données valides.");
                  }
                  if (markerData) {
                    emit('markerClicked', {
                      libelle: markerData.libelle,
                      url: markerData.url,
                      opening_hours: markerData.opening_hours,
                      phone_number: markerData.phone_number,
                      handicap: markerData.handicap,
                      description: markerData.description,
                      sous_description: markerData.sous_description,
                    });
                  }
                }
              });
            });
          }
        }
      }
    };

    const addRoute = async(userMarker: L.LatLng, marker: L.LatLng) => {
      const apiKey = '5b3ce3597851110001cf6248ff9621eb30514e4fbe61cc0453154691'; // Remplacez par votre clé API OpenRouteService
      const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${userMarker.lng},${userMarker.lat}&end=${marker.lng},${marker.lat}`;

      try {
        // Effacer l'itinéraire précédent s'il existe  
        handleClearRoute();

        const response = await fetch(url);
        const data = await response.json();

        // Extraction de la durée et de la distance
        const durationInSeconds = data.features[0].properties.summary.duration;
        const distanceInMeters = data.features[0].properties.summary.distance;

        // Convertir la durée en un format plus lisible
        const durationInMinutes = Math.round(durationInSeconds / 60);

        const { coordinates } = data.features[0].geometry;

        const latLngs = coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
        if (map !== null) {
          currentRoute = L.polyline(latLngs, { color: 'blue' }).addTo(map);
          map.fitBounds(currentRoute.getBounds());
        }

        return { durationInMinutes, distanceInMeters };

      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };

    onMounted(initMap);

    watch(() => props.selectedTypes ?? {}, () => {
      updateMap();
    }, { deep: true });

    return { mapContainer, centerMapOnUser, handleClearRoute };

    },
  });
</script>

<style>
  /* Styles pour le conteneur de la carte */
  .map-container {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .center-icon {
    position: absolute;
    cursor: pointer;
    top: 7em;
    z-index: 1000; /* Assure une position au-dessus de la carte */
    margin-left: 0.62em;
    width: 2em; /* Largeur de l'image */
    height: auto; /* Hauteur de l'image */
    background-color: white;
    padding : 0.5em;
    border-radius: 100%;
    border: 1px solid;
  }

  .center-icon:hover {
    background-color: rgb(242, 242, 242); /* Couleur de fond lorsque survolé */
  }

  /* Ajoutez des media queries pour rendre le bouton de centrage réactif */
  @media screen and (max-width: 768px) {
    .center-icon {
      top: 2em; /* Ajustez la position du bouton de centrage sur les écrans de petite taille */
    }
  }
</style>