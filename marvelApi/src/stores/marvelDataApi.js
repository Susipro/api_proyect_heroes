export default class marvelDataApi{

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