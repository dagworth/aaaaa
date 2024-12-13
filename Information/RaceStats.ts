import { Races, PersonalityTrait, PersonStats } from "../Person.ts";

export class RaceStats {
    personality: {[key in PersonalityTrait]: number};
    stats: {[key in PersonStats]: number};
    racism: {[key in Races]: number};
    classes: {[key: string] : number};

    constructor(
        personality: {[key in PersonalityTrait]: number},
        stats: {[key in PersonStats]: number},
        racism: {[key in Races]: number},
        classes: {[key: string] : number}
    ) {
        this.personality = personality;
        this.stats = stats;
        this.racism = racism;
        this.classes = classes;
    }
}

export const HumanStats = new RaceStats(
    {
        violent: 80,
        jealousy: 80,
        spiteful: 50,
        prideful: 50,
        trusting: 50,
        confident: 30,
    },
    {
        smart: 70,
        strength: 10,
        beauty: 45,
    },
    {
        Human: 1,
        Elf: 70,
        Dwarf: 40,
        Demon: 100,
    },
    {
        "Citizen": 60,
        "Knight": 15,
        "Mage": 15,
        "Shopkeeper": 10,
    }
);

export const ElfStats = new RaceStats(
    {
        violent: 20,
        jealousy: 50,
        spiteful: 80,
        prideful: 90,
        trusting: 25,
        confident: 75,
    },
    {
        smart: 90,
        strength: 40,
        beauty: 60,
    },
    {
        Human: 60,
        Elf: 1,
        Dwarf: 70,
        Demon: 100,
    },
    {
        "Citizen": 100,
    }
);

export const DwarfStats = new RaceStats(
    {
        violent: 10,
        jealousy: 80,
        spiteful: 50,
        prideful: 75,
        trusting: 20,
        confident: 70,
    },
    {
        smart: 45,
        strength: 30,
        beauty: 20,
    },
    {
        Human: 60,
        Elf: 70,
        Dwarf: 1,
        Demon: 100,
    },
    {
        "Citizen": 100,
    }
);

export const DemonStats = new RaceStats(
    {
        violent: 100,
        jealousy: 100,
        spiteful: 100,
        prideful: 100,
        trusting: 100,
        confident: 100,
    },
    {
        smart: 100,
        strength: 100,
        beauty: 100,
    },
    {
        Human: 100,
        Elf: 100,
        Dwarf: 100,
        Demon: 20,
    },
    {
        "Citizen": 100,
    }
);

export const raceMap: {[key in Races]: RaceStats} = {
    Human: HumanStats,
    Elf: ElfStats,
    Dwarf: DwarfStats,
    Demon: DemonStats,
};