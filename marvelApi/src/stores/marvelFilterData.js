import marvelCharacterModel from "./marvelCharacterModel.js";
import marvelDataApi from "./marvelDataApi.js";
export default class marvelFilterData{
    myMarvelArray = []
    constructor(){
        this.repository = new marvelDataApi()
    }
    async getData(){
        const data = await this.repository.getAllData()
        data.forEach(myMarvelData => {
            if (myMarvelData.biography.publisher == "Marvel Comics") {
                this.myMarvelArray.push(myMarvelData = new marvelCharacterModel(
                        myMarvelData.name,
                        myMarvelData.id,
                        myMarvelData.biography.aliases[0],
                        myMarvelData.values=0,
                        myMarvelData.favorites=false,
                        myMarvelData.powerstats.intelligence,
                        myMarvelData.powerstats.strength,
                        myMarvelData.powerstats.speed,
                        myMarvelData.powerstats.durability,
                        myMarvelData.powerstats.power,
                        myMarvelData.powerstats.combat,
                        myMarvelData.images.sm,
                        myMarvelData.images.md));
            }
        });
        return this.myMarvelArray;
    }
}