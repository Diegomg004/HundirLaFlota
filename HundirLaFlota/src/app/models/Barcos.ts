import { Coordenadas } from "./Cordenadas";

export class Barcos {
    tamano: number;
    tocado: number;
    cordenadasBarco: Set<Coordenadas>;

    constructor(tamano: number, tocado: number, cordenadasBarco: Set<Coordenadas>) {
        this.tamano = tamano;
        this.tocado = tocado;
        this.cordenadasBarco = cordenadasBarco;
    }
}

