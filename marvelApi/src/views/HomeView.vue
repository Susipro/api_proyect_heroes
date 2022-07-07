<script setup>
import MarvelHeroList from '../components/MarvelHeroList.vue';
import FavoritosView from '../components/FavoritosView.vue';
import PopUpCard from '../components/PopUpCard.vue';

</script>

<template>
  <main>
    <div id="homeSection">
      <MarvelHeroList />
    </div>
    <div id="favoritesSection">
      <FavoritosView />
    </div>
    <!-- <PopUpCard /> -->
  </main>

</template>

<style>
main {
  width: 90vw;
  margin: auto;
}
</style>
