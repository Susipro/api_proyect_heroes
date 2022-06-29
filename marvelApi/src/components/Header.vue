<script setup>
import { RouterLink } from 'vue-router'
import IconsHome from './Icons/IconsHome.vue';
import IconsFavorites from './Icons/IconsFavorites.vue';
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
header{
  border-bottom: 2px solid black;
  background-color: #f1f2f6;
}
h1 {
  font-weight: 500;
  font-size: 64px;
  font-weight: bold;
}
.navBar{
  display:flex;
  align-items: center;
  left: 50px;
}
nav a {
  display: inline-block;
  padding: 0 1.5rem;
}
</style>
