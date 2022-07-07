<script setup>
import MarvelHeroList from '../components/MarvelHeroList.vue';
import FavoritosView from '../components/FavoritosView.vue';

</script>

<template>
  <main>
    <MarvelHeroList />
    <div id="favoritesSection">
      <FavoritosView />
    </div>
  </main>
</template>

<style>
main {
  width: 90vw;
  margin: auto;
}
</style>
