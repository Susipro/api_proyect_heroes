// import marvelCharacterModel from "./marvelCharacterModel.js";
// import marvelDataApi from "marvelDataApi.js";
class marvelCharacterModel{
    name;
    id;
    alias;
    values;
    favorites;
    intelligence;
    strength;
    speed;
    durability;
    power;
    combat;
    sm;
    md;

    constructor(name,id,alias,values,favorites,intelligence,strength,speed,durability,power,combat,sm,md){
        this.name = name;
        this.id = id;
        this.alias = alias;
        this.values = values;
        this.favorites = favorites;
        this.intelligence = intelligence;
        this.strength = strength;
        this.speed = speed;
        this.durability = durability;
        this.power = power;
        this.combat = combat;
        this.sm = sm;
        this.md= md;
    }
}

class marvelDataApi{
    constructor(){
        this.url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
    }

    async getAllData(){
        try{
            const response = await fetch(this.url)
            const marvelJson = await response.json()
            return marvelJson      
        } catch (error) {
            console.log('Error : ' + error)
        }
    }
}

class marvelFilterData{
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





