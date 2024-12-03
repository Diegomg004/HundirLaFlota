import { Component } from '@angular/core';
import { Casilla } from '../models/Casilla';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Barcos } from '../models/Barcos';
import { Coordenadas } from '../models/Cordenadas';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.sass'
})
export class MainComponentComponent {
  [x: string]: any;

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
  barcosMaximos: number = 0; 
  general:boolean = true;
  fBarcos:boolean = false;

  numberOfShootOnSheet:number = 0;
  numberOfCoordOnSheet:number = 0;

  sheep:Barcos=new Barcos(0,0,0,"");

  constructor() {
    this.flota = [];
    this.tablero
  }
  onSubmit() {
    this.numberOfCoordOnSheet = this.sheep.tamano;
    this.flota.push(new Barcos(this.sheep.tamano, this.sheep.xInicial, this.sheep.yInicial, this.sheep.orientacion));
    this.general = true;
    this.fBarcos = false;
    console.log(this.flota)
  }

  realizarDisparo(x: number, y: number) { 
    if(this.numberOfShootOnSheet!==this.numberOfCoordOnSheet){
      if(!this.tablero[x][y].disparado){
        if (this['disparo'](x, y)) {
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

  addFlota(){
      this.general = false;
      this.fBarcos = true;
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
