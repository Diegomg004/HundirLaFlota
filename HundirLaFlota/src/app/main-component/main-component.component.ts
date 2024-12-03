import { Component } from '@angular/core';
import { Barcos } from '../models/Barcos';
import { Coordenadas } from '../models/Cordenadas';
import { Casilla } from '../models/Casilla';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.sass'
})

export class MainComponentComponent {

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

  sheep:Barcos=new Barcos(0,1,1,"");
  disparadoUnaVez:boolean = false;
 

  constructor() {
    this.flota = [];
    this.tablero

  }

  disparo(x: number, y: number): boolean {
    let huboImpacto = false;
    this.disparadoUnaVez = true;
      this.flota.forEach(barco => {
        barco.cordenadasBarco.forEach((coordenada) => {
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

  onSubmit() {
    this.flota.push(new Barcos(this.sheep.tamano, this.sheep.xInicial, this.sheep.yInicial, this.sheep.orientacion));
    this.general = true;
    this.fBarcos = false;
    console.log(this.flota)
    this.numberOfCoordOnSheet = this.numberOfCoordOnSheet + this.sheep.tamano;
    
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
      console.log(this.numberOfCoordOnSheet+"-"+this.numberOfShootOnSheet)
      if(this.numberOfShootOnSheet===this.numberOfCoordOnSheet){
        alert("Has ganado!!!")
      }
    }
  }

  addFlota(){
      this.general = false;
      this.fBarcos = true;
    }
  


  // sumamaos la distancia horizotal y vertucal con el tamaño

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
