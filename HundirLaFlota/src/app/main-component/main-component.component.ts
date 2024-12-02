import { Component } from '@angular/core';
import { Flota } from '../models/Flota';
import { Casilla } from '../models/Casilla';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.sass'
})
export class MainComponentComponent {
  Flota = new Array<Barcos>;
  Barco1 = new Barcos(1, 0, false, [{ x: 1, y: 2 }], []);
  tablero: Casilla[][] = [[new Casilla, new Casilla, new Casilla],[new Casilla, new Casilla, new Casilla]];
  flota: Barcos[] = []; 
  tamanoBarco: number = 0; 
  coordenadas: Coordenadas[] = []; 
  x: number = 0; 
  y: number = 0; 
  barcosMaximos: number = 5; 

  constructor() {
    this.Flota = [this.Barco1];
    this.tablero

  }

  }
}

  realizarDisparo(x: number, y: number) { 
    const impacto = this.disparo(x, y);
    if (impacto) {
      console.log("¡Has acertado!");
      this.tablero[x][y].url = "boom.png";
    } else {
      console.log("¡Agua!");
      this.tablero[x][y].url = "agua.png";
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
