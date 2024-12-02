import { numberAttribute } from "@angular/core";
import { Coordenadas } from "./Cordenadas";

export class Barcos {
  private _tamano: number;
  private _cordenadasBarco: Coordenadas[];
  private _xInicial: number;
  private _yInicial: number;
  private _orientacion: string;

  constructor(_tamano: number, _xInicial: number, _yInicial: number, orientacion: string) {
    this._tamano = _tamano;
    this._xInicial = _xInicial;
    this._yInicial = _yInicial;
    this._orientacion = orientacion;
    this._cordenadasBarco = [];
    if (this.orientacion === "V") {
      for (var i:number = 0; i < _tamano; i++) {
        this._cordenadasBarco.push(new Coordenadas(_xInicial, _yInicial++));
      }
    } else {
      for (var i:number = 0; i < _tamano; i++) {
        this._cordenadasBarco.push(new Coordenadas(_xInicial++, _yInicial));
      }
    }

  }

  get tamano(): number {
    return this._tamano;
  }
  get xInicial(): number {
    return this._xInicial;
  }
  get yInicial(): number {
    return this._yInicial;
  }
  get orientacion(): string {
    return this._orientacion;
  }
  get cordenadasBarco(): Coordenadas[] {
    return this._cordenadasBarco;
  }

  set tamano(_tamano) {
    if (_tamano <= 0) {
      throw new Error("El tamaño del barco debe ser positivo.");
    }
    this._tamano = _tamano;
  }

  set xInicial(_xInicial) {
    if (_xInicial < 0) {
      throw new Error("La coordenada X inicial debe ser no negativa.");
    }
    this._xInicial = _xInicial;
  }

  set yInicial(_yInicial) {
    if (_yInicial < 0) {
      throw new Error("La coordenada Y inicial debe ser no negativa.");
    }
    this._yInicial = _yInicial;
  }

  set orientacion(_orientacion) {
    if (_orientacion !== "V" && _orientacion !== "H") {
      throw new Error("La orientación debe ser 'V' (vertical) o 'H' (horizontal).");
    }
    this._orientacion = _orientacion;
  }

}

