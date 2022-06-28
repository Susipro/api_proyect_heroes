<script>
import { mapState } from "pinia";
import { useMarvelStore } from "../stores/marvel.js";
export default {
  computed: {
   ...mapState( useMarvelStore,['myMarvelData'] )
  }
};
</script>

<template>
  <div v-for="data in myMarvelData" :key=data.name>
    <img v-bind:src="data.images.sm" alt="">
    <p>{{ data.name }} / {{ data.alias[0] }} / {{ data.powerstats.combat }}</p>
  </div>
</template>
