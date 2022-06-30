
/*
let myMarvel = new Array
const marvelData = async() => {
  try{
    const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
    const marvelJson = await response.json()
    marvelJson.map(element=>{
      if (element.biography.publisher == "Marvel Comics") {
        myMarvel.push(
            {name:element.name,
              id:element.id,
              alias:element.biography.aliases,
              values:0,
              favorites:false,
            powerstats:{
            intelligence:element.powerstats.intelligence,
            strength:element.powerstats.strength,
            speed:element.powerstats.speed,
            durability:element.powerstats.durability,
            power:element.powerstats.power,
            combat:element.powerstats.combat},
            images:{
              sm:element.images.sm,
              md:element.images.md}
                }
            )
        }
    })
  }catch(error){
  console.log('Error : ' + error)
  }
}

marvelData()
*/
import { defineStore } from 'pinia'
import marvelFilterData from './marvelFilterData.js'

export const useMarvelStore = defineStore({  // suele usarse use+NOMBRE+Store
  id: 'marvelApi',
  state:()=>({
    myMarvelData: marvelFilterData,
  }),

  getters: {
    /*
    doubleCount: (state) => state.myMarvel * 2,
    */
  },
  
  actions: {
    
  }
})