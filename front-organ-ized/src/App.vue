<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from "./components/NavBar.vue";
</script>

<template>
    <NavBar/>
    <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body{
    background: -webkit-linear-gradient(-135deg, #41B883, #35495E);
    background: -o-linear-gradient(-135deg, #41B883, #35495E);
    background: -moz-linear-gradient(-135deg, #41B883, #35495E);
    background: linear-gradient(-135deg, #41B883, #35495E);
    background-attachment: fixed;
}
</style>
