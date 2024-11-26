import { Component } from '@angular/core';
import { Barcos } from '../models/Barcos';
import { Coordenadas } from '../models/Cordenadas';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.sass'
})

export class MainComponentComponent {
  Flota = new Array<Barcos>;
  Barco1: Barcos = new Barcos(1, 0, false, [{ x: 1, y: 2 }], []);
  coordX: number
  coordY: number;


  constructor() {
    this.Flota = [this.Barco1];
    this.coordX = 0
    this.coordY = 0
  }

  disparo(x: number, y: number): boolean {
    let huboImpacto = false;
    this.Flota.forEach(barco => {
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
    const impacto = this.disparo(x, y);
    if (impacto) {
      console.log("¡Has acertado!");
    } else {
      console.log("¡Agua!");
    }

  }

}