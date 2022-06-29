<script>
import { mapState } from "pinia";
import { useMarvelStore } from "../stores/marvel.js";
import IconsFavoritesGrayHeart from "./Icons/IconsFavoritesGrayHeart.vue";
import FavoritosView from "../views/FavoritosView.vue";

export default {
    components: { IconsFavoritesGrayHeart, FavoritosView },
    computed: {
        ...mapState(useMarvelStore, ["myMarvelData"])
    },
    components: { IconsFavoritesGrayHeart, FavoritosView }
};
</script>

<template>
  <div class="horintotalScroll">
    <div class="card" v-for="data in myMarvelData" :key="data.index">
      <img :src="data.images.sm" :alt="data.name" :title="data.name" :id="data.id">
      <div class="color">
        <p>{{ data.name }}</p>
        <IconsFavoritesGrayHeart />
      </div>
    </div>  
  </div>

  <FavoritosView/>
</template>
  

<style scoped >


@import '@/assets/base.css';
.horintotalScroll{
 
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