<script>
import { mapState } from "pinia";
import { useMarvelStore } from "../stores/marvel.js";
import IconsFavoritesGrayHeart from "./Icons/IconsFavoritesGrayHeart.vue";
import FavoritosView from '../views/FavoritosView.vue';

export default {
    components: { IconsFavoritesGrayHeart, FavoritosView },
    computed: {
        ...mapState(useMarvelStore, ["myMarvelData"])
    },
    components: { IconsFavoritesGrayHeart }
};
</script>

<template>
  <div class="card" v-for="data in myMarvelData" :key="data.index">
    <img :src="data.images.sm" :alt="data.name" :title="data.name" :id="data.id">
    <div class="color">
       <p>{{ data.name }}</p>
       <IconsFavoritesGrayHeart/>   
    </div>
  </div>
  <div id="favorites">
    <h2>Aqui van los favorios</h2>
    <FavoritosView />
  </div>
</template>

<style scoped >
@import '@/assets/base.css';
  .color{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    top:-30px;
    background-color: var(--color-background-card-transparent);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

.color p {
  text-align:left;
  padding-left: 5px;
  top:0px;
  color: var(--color-text);
  font-weight: 700;
}
</style>