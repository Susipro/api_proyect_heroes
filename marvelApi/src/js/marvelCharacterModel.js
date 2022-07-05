export default class marvelCharacterModel{
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