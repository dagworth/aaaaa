import {Person} from "./Person.ts";
import {Location} from "./Location.ts";

const map: Location[][] = [];
const MAP_SIZE: number = 7;

for (let i = 0; i < MAP_SIZE; i++) {
   map[i] = [];
   for (let j = 0; j < MAP_SIZE; j++) {
      map[i][j] = new Location();
   }
}

//creates the map