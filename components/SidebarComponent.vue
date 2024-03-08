<template>
  <!-- Contenu de la barre latérale -->
  <div class="sidebar">
    <!-- Logo -->
    <div class="logo">
      <img src="../assets/icon_pointfinder.png" alt="Icon PF" class="img-responsive">
    </div>
    <!-- Liste des intérêts avec des commutateurs -->
    <ul>
      <li v-for="(interest, index) in interests" :key="index">
        <div class="switch">
          <!-- Commutateur d'intérêt -->
          <input type="checkbox" :id="'switch-' + interest" @change="updateSelectedTypes(interest, $event)" :checked="selectedTypes[interest]" class="switch-input">
          <label :for="'switch-' + interest" class="switch-label"></label>
          <span>{{ interest }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useToast } from 'vue-toastification'

  export default defineComponent({
    // Fonction de setup pour permettre l'utilisation de Toast sur cette page
    setup() {
      // Récupère l'interface toast
      const toast = useToast();
      return { toast }
    },
    data() {
      return {
        // Liste des intérêts
        interests: ['Restaurant', 'Health', 'Cinema', 'Parking', 'Shop', 'Petrol station', 'Toilets', 'Hotel'],
        // Types sélectionnés
        selectedTypes: {} as Record<string, boolean>,
      };
    },
    methods: {
      // Met à jour les types sélectionnés
      updateSelectedTypes(interest: string, event: Event) {
        const target = event.target as HTMLInputElement | null;
        if (target !== null) {
          const isChecked = target.checked;
          const checkedCount = Object.values(this.selectedTypes).filter(value => value).length;
          if (!isChecked) {
            this.selectedTypes = { ...this.selectedTypes, [interest]: isChecked };
          } else if (checkedCount < 2) {
            this.selectedTypes = { ...this.selectedTypes, [interest]: isChecked };
          } else {
            // Affiche une erreur si le nombre maximal de cases à cocher est atteint
            this.toast.error('Limit of 2 checkboxes reached');
            target.checked = false;
          }
          // Émet un événement pour notifier les changements de types sélectionnés
          this.$emit('selectedTypesUpdated', this.selectedTypes);
        }
      },
    },
  });
</script>

<style scoped>
  /* Styles pour la barre latérale */
  .sidebar {
    padding: 1%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1%;
    width: 30%; /* Largeur fixe */
  }

  /* Styles pour les commutateurs */
  .switch {
    display: flex;
    align-items: center;
    gap: 0.5em; /* Espacement entre les éléments */
  }

  .switch-input {
    opacity: 0; /* Rend le commutateur invisible */
    position: absolute;
    width: 0;
    height: 0;
  }

  .switch-label {
    position: relative;
    display: block;
    width: 60px;
    height: 34px;
    background-color: #ccc;
    border-radius: 34px;
    cursor: pointer;
    transition: .4s; /* Transition fluide */
  }

  .switch-label:before {
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: .4s; /* Transition fluide */
  }
  .switch-input:checked + .switch-label {
    background-color: rgb(212,146,112); /* Couleur de fond lorsque activé */
  }
  
  .switch-input:checked + .switch-label:before {
    transform: translateX(26px); /* Positionne le curseur lorsque activé */
  }
  
  /* Styles pour le logo */
  .logo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }  

  /* Styles pour les images */
  .img-responsive {
    width: 200%; /* Largeur de l'image */
    height: auto;
    cursor: default;
  }

  /* Styles pour la liste */
  ul {
    list-style-type: none; /* Supprime les puces de la liste */
    margin-top: 4em;
  }

  /* Styles pour les éléments de liste */
  li {
    margin-bottom: 1.5em; /* Marge en bas des éléments de liste */
    font-size: 1em; /* Taille de police */
  }

  /* Ajoutez des media queries pour rendre la barre latérale réactive */
  @media screen and (max-width: 768px) {
    .sidebar {
      width: 40%; /* Par exemple, la barre latérale prendra 100% de la largeur sur les écrans de petite taille */
    }
  }
</style>
