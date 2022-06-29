<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <header>
    <div class="title">
      <h1>Super Hero Web</h1>
    </div>
    <nav>
<RouterLink to="/">Inicio</RouterLink>
<RouterLink to="/Favoritos">Favoritos</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}
</style>
