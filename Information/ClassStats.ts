import { Races, PersonalityTrait, PersonStats } from "../Person.ts";

export class ClassStats {
    name: string;
    personality: Partial<{[key in PersonalityTrait]: number}>;
    stats: Partial<{[key in PersonStats]: number}>;
    items: string[];

    constructor(
        name: string,
        personality: Partial<{[key in PersonalityTrait]: number}>,
        stats: Partial<{[key in PersonStats]: number}>,
        items: string[],
    ) {
        this.name = name,
        this.personality = personality;
        this.stats = stats;
        this.items = items;

    }
}

export const class_stats: {[key in Races]: {[key: string]: ClassStats}} = {
    "Human": {
        "Citizen": new ClassStats(
            "Citizen",
            {
                
            },
            {
                
            },
            [
                
            ]
        ),
        "Mage": new ClassStats(
            "Mage",
            {
                violent: 20,
                prideful: 30,
                confident: 33,
                trusting: 10,
            },
            {
                smart: 40,
                strength: 25
            },
            [
                "staff"
            ]
        ),
        "Knight": new ClassStats(
            "Knight",
            {
                violent: 30,
                prideful: 20,
                confident: 33,
                trusting: 10,
            },
            {
                smart: 25,
                strength: 40,
            },
            [
                "sword"
            ]
        ),
        "Shopkeeper": new ClassStats(
            "Shopkeeper",
            {
                trusting: -10,

            },
            {
                smart: 50,
                strength: -10,
            },
            [
                
            ]
        )
    },
    "Elf" : {
        "Citizen": new ClassStats(
            "Citizen",
            {
                
            },
            {
                
            },
            [
                
            ]
        ),
    },
    "Dwarf" : {
        "Citizen": new ClassStats(
            "Citizen",
            {
                
            },
            {
                
            },
            [
                
            ]
        ),
    },
    "Demon" : {
        "Citizen": new ClassStats(
            "Citizen",
            {
                
            },
            {
                
            },
            [
                
            ]
        ),
    }
}