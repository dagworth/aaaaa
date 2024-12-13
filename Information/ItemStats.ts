import { Stuff } from "../Stuff.ts";

export const items: {[key: string]: Stuff} = {
    "sword": new Stuff(
        "sword",
        false,
        false,
        100
    ),
    "staff": new Stuff(
        "staff",
        false,
        false,
        100
    )
}