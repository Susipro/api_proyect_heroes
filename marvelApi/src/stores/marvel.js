import { defineStore } from "pinia";

export const useMarvelStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    marvelApi() {
        const marvelApi = async() => {
            try{
                const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
                const marvelJson = await response.json() ;        
                marvelJson.map(element=>{
                    if (element.biography.publisher == "Marvel Comics") {
                        myMarvel.push(
                            {name:element.name,
                            powerstats:{
                            intelligence:element.powerstats.intelligence,
                            strength:element.powerstats.strength,
                            speed:element.powerstats.speed,
                            durability:element.powerstats.durability,
                            power:element.powerstats.power,
                            combat:element.powerstats.combat}
                                }
                            )
                        }
                })
                return myMarvel
            }
            catch(error){
                console.log('Error : ' + error)
            }
        }
    },
  },
});