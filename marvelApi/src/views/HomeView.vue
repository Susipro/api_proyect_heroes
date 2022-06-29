<script setup>
import MarvelHeroList from "../components/MarvelHeroList.vue";

</script>

<template>
  <main>
    <MarvelHeroList />
  </main>
</template>

<style>
main{
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  gap: 10px;
}

</style>
