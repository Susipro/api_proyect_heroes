<template id="modal-template">
  <div class="card">
    <p>{{ favoritesArray[0].name }}</p>
    <div class="heroe">
      <img :src="favoritesArray[0].sm" :alt="favoritesArray[0].name" :title="favoritesArray[0].name"
        :id="favoritesArray[0].id" />
    </div>
    <div class="iconos">
      <IconsPencil />
      <div class="stars">
        <IconsStar />
        <IconsStar />
        <IconsStar />
        <IconsStar />
        <IconsStar />
      </div>
      <IconsFavoritesRedHeart />
    </div>
    <div class="alias">Alias : {{ favoritesArray[0].alias }}</div>
    <div class="powerGeneral">
      <div class="powers">
        <p>Intelligence</p>
        <progress :value="favoritesArray[0].intelligence" max="100" class="barra"></progress>
      </div>
      <div class="powers">
        <p>strength</p>
        <progress :value="favoritesArray[0].strength" max="100" class="barra"></progress>

      </div>
      <div class="powers">
        <p>Speed</p>
        <progress :value="favoritesArray[0].speed" max="100" class="barra"></progress>
      </div>
      <div class="powers">
        <p>Durability</p>
        <progress :value="favoritesArray[0].durability" max="100" class="barra"></progress>
      </div>
      <div class="powers">
        <p>Power</p>
        <progress :value="favoritesArray[0].power" max="100" class="barra"></progress>
      </div>
      <div class="powers">
        <p>Combat</p>
        <progress :value="favoritesArray[0].combat" max="100" class="barra"></progress>
      </div>
    </div>
  </div>

</template>

<script>
import IconsStar from './Icons/IconsStar.vue';
import IconsFavoritesRedHeart from './Icons/IconsFavoritesRedHeart.vue';
import IconsPencil from './Icons/IconsPencil.vue';
import { useMarvelStore } from '../stores/marvel.js';
import { mapState } from 'pinia';
export default {
  computed: {
    ...mapState(useMarvelStore, ["favoritesArray"])
  }
}
</script>

<style scoped>
@import "../assets/base.css";

.card {
  width: 420px;
  height: 800px;
  border-radius: 5px;
  background-color: var(--color-background-card);
  display: flex;
  flex-direction: column;

}

.card p {
  text-align: center;
}

.heroe {
  position: relative;
  left: 50px;
}

img {
  border-radius: 20px;
}

.iconos {
  display: flex;
  justify-content: space-evenly;
  margin: 8px 0;
}

.linkPencil {
  width: 24px;
  height: 29px;
}

.linkHeartRed {
  width: 32px;
  height: 29px;
}

.linkBlueStart {
  width: 31px;
  height: 30px;
}

.alias {
  text-align: center;
  margin: 8px 0;
}

.powerGeneral {
  width: 400px;
  height: 110px;
  display: flex;
  flex-direction: column;

}

.powers {
  height: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}

.powers p {
  padding-left: 20px;
}
</style>