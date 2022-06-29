<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="titleBox">
      <h1>Marvel Super Hero</h1>
    </div>
    <div class="navBar">
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/Favoritos">Favoritos</RouterLink>
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
}
nav {
  font-weight: 500;
  font-size: 64px;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
}
</style>
