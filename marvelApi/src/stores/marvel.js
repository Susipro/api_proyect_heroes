import { defineStore } from 'pinia'

export const useMarvelStore = defineStore({ 
  id: 'marvelFavoritesArray',
  state:()=>({
    favoritesArray:[]
  }),

  getters: {
  },
  
  actions: {
    addFavorite(heroe)  {
      this.favoritesArray.push(heroe)
      console.log(this.favoritesArray)
    }
  }
})