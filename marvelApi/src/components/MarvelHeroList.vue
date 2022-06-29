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
    <div class="color"></div>
    <p>{{ data.name }}</p>
  </div>
</template>
<style>
</style>