<!-- Tabs.vue -->
<template>
    <div>
      <div class="tabs">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          :class="{ active: activeTab === index }"
        >
          {{ tab.label }}
        </div>
      </div>
      <div class="tab-content">
        <div v-show="tabs[activeTab]">
          <slot :activeTab="activeTab"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 0,
      };
    },
    props: {
      tabs: {
        type: Array,
        required: true,
      },
    },
    methods: {
      selectTab(index) {
        this.activeTab = index;
        this.$emit('tab-changed', index);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles pour vos onglets ici si nécessaire */
  .tabs {
    display: flex;
    justify-content: center;
  }
  .tabs div {
    cursor: pointer;
    padding: 15px;
    border: 1px solid #ccc;
    margin-right: 10px;
  }
  .tabs div:hover {
    background-color: #eee;
  }
  .tabs div.active {
    background-color: rgb(215, 157, 119);
    color: white;
  }
  .tab-content {
    margin-top: 3em;
  }
  </style>
  