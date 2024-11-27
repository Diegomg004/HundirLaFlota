import { Component } from '@angular/core';
import { Barcos } from '../models/barcos';  
import { Coordenadas } from '../models/coordenadas';

@Component({
  selector: 'app-body-component',
  standalone: true,
  imports: [],
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.sass']
})
export class BodyComponent {
  flota: Barcos[] = []; 
  tamanoBarco: number = 0; 
  coordenadas: Coordenadas[] = []; 
  x: number = 0; 
  y: number = 0; 
  barcosMaximos: number = 5; 

  agregarBarco() {
    if (this.flota.length < this.barcosMaximos) {
      let nuevoBarco = new Barcos(this.tamanoBarco, 0, false, this.coordenadas, [] );
      this.flota.push(nuevoBarco);
      this.tamanoBarco = 0;
      this.coordenadas = [];
    } else {
      alert('No puedes agregar más de 5 barcos.');
    }
  }

  agregarCoordenadas() {
    this.coordenadas.push(new Coordenadas(this.x, this.y));
    this.x = 0; 
    this.y = 0;
  }
}
