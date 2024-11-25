import { Barcos } from "./Barcos";

export class Flota{
    barcos: Array<Barcos>;

    constructor(barcos: Array<Barcos>){
        this.barcos = barcos;
    }
}