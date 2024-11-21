import { Barcos } from "./Barcos";

export class Flota{
    flota: Array<Barcos>;

    constructor(flota: Array<Barcos>){
        this.flota = flota;
    }
}