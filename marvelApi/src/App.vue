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
  max-width: 90vw;
  margin: 0 auto;
  padding: 2rem;
}

header {
  max-height: 100vh;
  display: flex;
  justify-content: space-evenly;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}



@media (min-width: 1024px) {

  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    
   
  }
 
  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
