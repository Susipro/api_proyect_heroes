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

  <div class="card" v-for="data in myMarvelData" :key="data.index">
    <img v-bind:src="data.images.sm" v-bind:alt="data.name"  v-bind:title="data.name">
    <div class="color">
       <p>{{ data.name }}</p>
    </div>
  </div>

</template>

<style scoped >
  .color{
    top:-30px;
    background-color: rgba(66, 168, 168, 0.7) ;
  }
.color p{
  text-align:left;
  padding-left: 5px;
  top:0px;
  color:solid black;
  font-weight: bold;
}

 

</style>