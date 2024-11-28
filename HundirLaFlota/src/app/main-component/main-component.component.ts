import { Component } from '@angular/core';
import { Flota } from '../models/Flota';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.sass'
})
export class MainComponentComponent {

  

  comprobarDisparo(x: number = 1,  y: number = 2,flota: Flota) {
    flota.barcos.forEach(barco => {
      barco.coordenadasBarco.forEach((coordenada: { x: any; y: any; }) => {
          if (coordenada.x === x && coordenada.y === y) {
              console.log("¡Impacto! Se ha alcanzado un barco en las coordenadas", x + " " + y);
          }
      });
  });
}
}
export class BodyComponentComponent {
  tamanobarcos : number = 5;
  Barcos:[] = [];
  cantBarcos: number | undefined;
  
  constructor() { 

  }
}


