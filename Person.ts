import { Memory } from "./Memory.ts";
import { Stuff } from "./Stuff.ts";

export enum Races {
    Human = "Human",
    Elf = "Elf",
    Dwarf = "Dwarf",
    Demon = "Demon",
}

export class Person {
    private logs: string[] = []; //purely to see what happened

    name: string;
    race: Races;
    age: number;
    status: string; //alive, dead, sleeping etc
    memories: Memory[] = []; //what this guy remembers
    stuff: Stuff[] = []; //what this guy has on him rn including appearance (elf ears idk)

    //1-100
    personality: {[trait: string] : number} = {
        violent : 70, //how likely to fight given a situation
        jealousy : 80, //how likely to confront given seeing something cool
        spiteful : 30, //how likely to use past negative memories
        prideful : 20, //how likely to fight given race, how likely will try stealing
        trusting : 50, //how likely to ignore weird inconsistencies
    }

    //1-100
    //this should mainly be used to determine what happens in a fight, donno if this should even be used
    stats: {[stat: string] : number} = {
        smart : 144, 
        speed : 43,
        strength : 55,
        beauty : 30, //lmao
    }

    //1-100
    //given personaility, these numbers will be multiplied together to determine what action to do
    racism: {[race: string] : number} = {
        Human : 5,
        Elf : 90,
        Drawf : 60,
        Demon : 100,
    }
}