<script setup>
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
        <a href="#homeSection">
          <IconsHome />
        </a>

        <a href="#favoritesSection">
          <IconsFavorites />
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import "@/assets/base.css";

header {
  position: sticky;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--color-background-pag);
  background: white;
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
