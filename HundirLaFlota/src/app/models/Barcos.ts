import { Coordenadas } from "./Cordenadas";

export class Barcos {
    private _tamano: number;
    private _tocado: number;
    private _hundido: boolean;
    private _cordenadasBarco: Coordenadas[];
    private _posicionesTocadas: Coordenadas[];

    constructor(_tamano: number, _tocado: number, _hundido: boolean, _cordenadasBarco:Coordenadas[], _posicionesTocadas: Coordenadas[]) {
        this._tamano = this.tamano;
        this._tocado = this.tocado;
        this._cordenadasBarco = _cordenadasBarco;
        this._hundido = false;
        this._posicionesTocadas = _posicionesTocadas;
    }

    get tamano(): number {
        return this._tamano;
      }
    
      get tocado(): number {
        return this._tocado;
      }
    
      get hundido(): boolean {
        return this._hundido;
      }
    
      get coordenadasBarco(): Coordenadas[] {
        return this._cordenadasBarco;
      }

      get posicionesTocadas(): Coordenadas[] {
        return this._posicionesTocadas;
      }
    

 
}

