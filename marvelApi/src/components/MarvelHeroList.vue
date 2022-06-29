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
  <div class="card" v-for="data in myMarvelData" :key="data.name">
    <img v-bind:src="data.images.sm" alt="">
    <div class="color">
       <p>{{ data.name }}</p>
    </div>
   
  </div>
</template>
<style scoped >
  .color{
    top:-30px;
    background-color: rgba(41, 112, 112, 0.4) ;
  }
.color p {
  text-align:left;
  top:0px;
  color:solid black;
}
</style>