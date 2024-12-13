export class Stuff {
    name: string
    hidden : boolean;
    perm : boolean;
    perceptive_cost: number;
    constructor(
        name: string,
        hidden: boolean,
        perm: boolean,
        perceptive_cost: number,
    ){
        this.name = name,
        this.hidden = hidden,
        this.perm = perm,
        this.perceptive_cost = perceptive_cost
    }
}