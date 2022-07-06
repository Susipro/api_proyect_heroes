<script>
import { useMarvelStore } from "../stores/marvel.js";
import IconsFavoritesGrayHeart from "./Icons/IconsFavoritesGrayHeart.vue";
import FavoritosView from "../views/FavoritosView.vue";
import marvelFilterData from '../js/marvelFilterData.js'
import { mapActions } from "pinia";

export default {
  data() {
    return {
      marvelData: []
    }
  },
  components: { IconsFavoritesGrayHeart, FavoritosView, marvelFilterData },
  methods: {
    ...mapActions(useMarvelStore, ['addFavorite']),
  },
  async created() {
    const handler = new marvelFilterData();
    const data = await handler.getData();
    this.marvelData = data;
  },

};


</script>

<template>
<header>
  <h1>ALL MARVEL HEROES</h1>
</header>
  <main>
    <div class="horintotalScroll">
      <div class="card" v-for="data in marvelData" :key="data.index">
        <img :src="data.sm" :alt="data.name" :title="data.name" :id="data.id">
        <div class="color">
          <p>{{ data.name }}</p>
          <icon @click="addFavorite(data)">
            <IconsFavoritesGrayHeart />
          </icon>
        </div>
      </div>
    </div>
  </main>
  <FavoritosView />

</template>


<style scoped >



@import '@/assets/base.css';


h1 {
  font-weight: 700;
  margin: 1rem auto;
}
.horintotalScroll {
  display: grid;
  grid-template-rows: 250px 250px;
  grid-auto-flow: column;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 10px;
  row-gap: 10px;
}

.horintotalScroll::-webkit-scrollbar {
  width: 12px;
}

.horintotalScroll::-webkit-scrollbar-track {
  background: transparent;
}

.horintotalScroll::-webkit-scrollbar-thumb {
  background-color: var(--color-iconHouese);
  border-radius: 5px;
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

icon{
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