<script setup>
import MarvelHeroList from "../components/MarvelHeroList.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

</script>

<template>
  <Header/>
  <main>
    <MarvelHeroList />
  </main>
  <Footer/>
</template>

<style>
main{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

</style>
