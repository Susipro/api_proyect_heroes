<script>
import { mapState } from "pinia";
import { useMarvelStore } from "../stores/marvel.js";
import IconsFavoritesGrayHeart from "./Icons/IconsFavoritesGrayHeart.vue";
export default {
    computed: {
        ...mapState(useMarvelStore, ["myMarvelData"])
    },
    components: { IconsFavoritesGrayHeart }
};
</script>

<template>
  <div class="card" v-for="data in myMarvelData" :key="data.name">
    <img v-bind:src="data.images.sm" alt="Marvel Hero img">
    <div class="color">
       <p>{{ data.name }}</p>
       <IconsFavoritesGrayHeart/>
    </div>
   
  </div>
</template>
<style scoped >
@import '@/assets/base.css';
  .color{
    top:-30px;
    background-color: var(--color-background-card-transparent);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
.color p {
  text-align:left;
  top:0px;
  color: var(--color-text);
  font-weight: 700;
}
</style>