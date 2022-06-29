<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 100vw;
  margin: 0 auto;
}

header {
  max-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
}
</style>
