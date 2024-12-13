import {Person, Races} from "./Person.ts";
import {Location} from "./Location.ts";
import { raceMap, RaceStats } from "./Information/RaceStats.ts";
import { ClassStats, class_stats } from "./Information/ClassStats.ts";
import { items } from "./Information/ItemStats.ts";

const map: Location[][] = [];
const MAP_SIZE: number = 7;
const SIMULATION_STEPS: number = 3;

for (let i = 0; i < MAP_SIZE; i++) {
   map[i] = [];
   for (let j = 0; j < MAP_SIZE; j++) {
      map[i][j] = new Location();
   }
}

function make_random(num: number): number {
   return (Math.random()*2 + 0.1)*num;
}

function create_guy(race: Races, guy_name: string){
   let new_guy : Person = new Person();
   let x : number = Math.floor(Math.random() * 7);
   let y : number = Math.floor(Math.random() * 7);
   map[x][y].people.push(new_guy);

   new_guy.race = race;
   new_guy.age = Math.floor(Math.random() * 70) + 30;
   new_guy.name = guy_name;
   
   let race_stats : RaceStats = raceMap[race];
   let random: number = Math.random()*100;
   let chosen_class: ClassStats = new ClassStats("",{},{},[]);
   for(let key in race_stats.classes) {
      let value = race_stats.classes[key];
      if(random-value <= 0){
         chosen_class = class_stats[race][key];
         break;
      }
      random-=value;
   }
   
   new_guy.class = chosen_class.name;

   for(let key in chosen_class.personality) {
      let value = chosen_class.personality[key];
      new_guy.personality[key] += value;
   }
   for(let key in chosen_class.stats) {
      let value = chosen_class.stats[key];
      new_guy.stats[key] += value;
   }

   for(let i = 0; i < chosen_class.items.length; i++){
      new_guy.inventory.push(items[chosen_class.items[i]]);
   }

   for(let key in race_stats.personality) {
      let value = race_stats.personality[key];
      new_guy.personality[key] = make_random(value);
   }
   for(let key in race_stats.stats) {
      let value = race_stats.stats[key];
      new_guy.stats[key] = make_random(value);
   }
   for(let key in race_stats.racism) {
      let value = race_stats.racism[key];
      new_guy.racism[key] = make_random(value);
   }
}

for(let i = 0; i < 40; i++){
   create_guy("Human","human"+i);
   create_guy("Elf","elf"+i);
   create_guy("Dwarf","dwarf"+i);
   create_guy("Demon","demon"+i);
}

for(let i = 0; i < SIMULATION_STEPS; i++){

}

console.log(map[0][0].people);