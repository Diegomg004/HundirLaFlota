import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Coordenadas } from './models/Cordenadas';
import { Barcos } from './models/Barcos';
import { Flota } from './models/Flota';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'HundirLaFlota';
  cordDisparo = new Array<Coordenadas>; 
  barco: Barcos;

  constructor() {
    this.cordDisparo = [
      { x: 1, y: 2 },
      { x: 1, y: 3 }
    ];
  
    this.barco = new Barcos(2, 0, false, [
      { x: 1, y: 2 },
      { x: 1, y: 3 }
    ]);
  }


  comprobarDisparo(cordDisparo: Coordenadas, barco: Barcos) {
    
      barco.coordenadasBarco.forEach((Coordenadas) => {
          if(cordDisparo === Coordenadas) {
              
          }
      });
        
      }
    
  }


