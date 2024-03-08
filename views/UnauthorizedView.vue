<template>
    <div class="unauthorized-container">
      <h1>403 - Unauthorized Access</h1>
      <p>Sorry, you do not have permission to access this page, or you tried to access directly to this error page.</p>
      <button @click="goHome">Go back to home</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goHome() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style>
    .unauthorized-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }
    
    .unauthorized-container button {
        margin-top: 20px;
        padding: 10px 20px;
        border: none;
        background-color: rgb(215, 157, 119);
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .unauthorized-container button:hover {
        background-color: rgb(190, 190, 190);
    }
    
  </style>
  