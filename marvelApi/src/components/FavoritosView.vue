<template>


  <header>
    <h1>MY FAVORITE MARVEL HERO</h1>
  </header>
  <main>
    <div class="horintotalScroll">
      <div class="card" v-for="data in favoritesArray" :key="data.index">
        <img :src="data.sm" :alt="data.name" :title="data.name" :id="data.id">
        <div class="color">
          <p>{{ data.name }}</p>
          <icon @click="addFavorite(data)">
            <IconsFavoritesRedHeart />
          </icon>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import { mapState } from "pinia"
import { useMarvelStore } from "../stores/marvel.js";
import IconsFavoritesRedHeart from "../components/Icons/IconsFavoritesRedHeart.vue";

export default {
  computed: {
    ...mapState(useMarvelStore, ["favoritesArray"])
  },
  data() {
    return {

    }
  },
  components: { useMarvelStore, IconsFavoritesRedHeart },
}
</script>

<style scoped >
@import '@/assets/base.css';

h1 {
  font-weight: 700;
  margin: 1rem auto;
}

main {
  width: 90vw;
  margin: auto;
  margin-bottom: 2vw;
}


.horintotalScroll {
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  row-gap: 10px;
}


.card {
  position: relative;
  width: 9vw;
  height: 13.5vw;
  max-width: 160px;
  max-height: 240px;
  min-width: 80px;
  min-height: 120px;
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1%;
}

icon {
  cursor: pointer;
}

.color {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: var(--color-background-card-transparent);
  border-radius: 1%;
  padding: 0 0.4vw;
}

.color p {
  color: var(--color-text);
  font-weight: 700;
}
</style>
