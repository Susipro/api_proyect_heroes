<script setup>
import { RouterLink } from "vue-router";
import IconsHome from "./Icons/IconsHome.vue";
import IconsFavorites from "./Icons/IconsFavorites.vue";
</script>

<template>
  <header>
    <div class="titleBox">
      <h1>Marvel Super Hero</h1>
    </div>
    <div class="navBar">
      <nav>
        <RouterLink to="/">
          <IconsHome />
        </RouterLink>

        <RouterLink to="/Favoritos">
          <IconsFavorites />
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import "@/assets/base.css";

header {
  border-bottom: 2px solid var(--color-background-pag);
  background: var(--color-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20vw;
}

h1 {
  font-weight: 500;
  font-size: 64px;
  font-weight: bold;
}

nav a {
  display: inline-block;
  padding: 0 2vw;
}
</style>
