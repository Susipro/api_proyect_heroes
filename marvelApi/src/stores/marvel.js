import { defineStore } from "pinia";

export const useMarvelStore = defineStore({
	id: "marvelFavoritesArray",
	state: () => ({
		favoritesArray: [],
	}),

  getters: {
  },
  
  actions: {
    addFavorite(heroe){
      if (this.emptyArray()) {
        this.pushArray(heroe)
        return
      }

      if (this.existArray(heroe)) {
        this.pushArray(heroe)
        return
      }
      
    },

    existArray(heroe){
      if (this.favoritesArray.includes(heroe)) {
        let posicion = this.favoritesArray.indexOf(heroe)
        this.deleteArray(posicion)
        return false
      }
      return true
    },
    
    deleteArray(index){
      this.favoritesArray.splice(index,1)
      return
    },

    pushArray(heroe){
      this.favoritesArray.push(heroe)
      return
    },

    emptyArray(){
      if (this.favoritesArray.length===0 ) {
        return true
      }
      return false
    }
  }
})