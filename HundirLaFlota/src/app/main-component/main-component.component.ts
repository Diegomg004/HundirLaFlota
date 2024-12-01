import { Component } from '@angular/core';
import { Barcos } from '../models/Barcos';
import { Coordenadas } from '../models/Cordenadas';
import { Casilla } from '../models/Casilla';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.sass'
})

export class MainComponentComponent {
  Barco1 = new Barcos(1, 0, false, [{ x: 1, y: 2 }], []);
  tablero: Casilla[][] = [[new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla],
  [new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla],
  [new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla],
  [new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla],
  [new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla],
  [new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla],
  [new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla],
  [new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla],
  [new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla],
  [new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla, new Casilla]];
  flota: Barcos[] = []; 
  tamanoBarco: number = 0; 
  coordenadas: Coordenadas[] = []; 
  x: number = 0; 
  y: number = 0; 
  barcosMaximos: number = 5; 
  general:boolean = true;

  numberOfShootOnSheet:number = 0;
  numberOfCoordOnSheet:number = 1;

  constructor() {
    this.flota = [this.Barco1];
    this.tablero

  }

  disparo(x: number, y: number): boolean {
    let huboImpacto = false;

    
      this.flota.forEach(barco => {
        barco.coordenadasBarco.forEach((coordenada) => {
          console.log(coordenada);
          console.log(x, y)
          if (coordenada.x == x && coordenada.y == y) {
            console.log("¡Impacto! Se ha alcanzado un barco en las coordenadas", x, y);
            huboImpacto = true;
          }
        });
      });

    return huboImpacto;
  }

  realizarDisparo(x: number, y: number) { 
    if(this.numberOfShootOnSheet!==this.numberOfCoordOnSheet){
      if(!this.tablero[x][y].disparado){
        if (this.disparo(x, y)) {
          console.log("¡Has acertado!");
          this.tablero[x][y].url = "boom.png";
          this.numberOfShootOnSheet++;
          this.tablero[x][y].disparado = true;
        } else {
          console.log("¡Agua!");
          this.tablero[x][y].url = "agua.png";
          this.tablero[x][y].disparado = true;
        }
      }

      if(this.numberOfShootOnSheet===this.numberOfCoordOnSheet){
        alert("Has ganado!!!")
      }
    }
  }

  agregarBarco() {
    if (this.flota.length < this.barcosMaximos) {
      let nuevoBarco = new Barcos(this.tamanoBarco, 0, false, this.coordenadas, []);
      this.flota.push(nuevoBarco);
      this.tamanoBarco = 0;
      this.coordenadas = [];
      alert('Barco agregado exitosamente.');
    } else {
      alert('No puedes agregar más de 5 barcos.');
    }
    
  }

  agregarCoordenadas() {
    if (this.x >= 0 && this.y >= 0) {
      this.coordenadas.push(new Coordenadas(this.x, this.y));
      this.x = 0;
      this.y = 0;
      alert('Coordenadas agregadas.');
    } else {
      alert('Introduce coordenadas válidas.');
    }
  }

}
