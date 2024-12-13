import { Memory } from "./Memory.ts";
import { Stuff } from "./Stuff.ts";

export type Races = "Human" | "Elf" | "Dwarf" | "Demon";
export type PersonalityTrait = "violent" | "jealousy" | "spiteful" | "prideful" | "trusting" | "confident";
export type PersonStats = "smart" | "strength" | "beauty";

export class Person {
    private logs: string[] = []; //purely to see what happened

    name: string;
    race: Races;
    age: number;
    class: string;
    status: string; //alive, dead, sleeping etc
    memories: Memory[] = []; //what this guy remembers about what
    inventory: Stuff[] = []; //what this guy has on him rn including appearance (elf ears idk)

    personality: Partial<{[key in PersonalityTrait] : number}> = {};
    stats: Partial<{[key in PersonStats] : number}> = {};
    racism: Partial<{[key in Races] : number}> = {};
}