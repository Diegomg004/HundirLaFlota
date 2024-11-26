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
  private tablero: string[][];
  private barcos: { x: number, y: number, longitud: number }[];

  constructor() {
    this.tablero = Array(10).fill(null).map(() => Array(10).fill('agua'));
    this.barcos = [];
    this.iniciarJuego();
  }

  private iniciarJuego() {
    const cantidadBarcos = parseInt(prompt("¿Cuántos barcos quieres colocar? (máx 5)") || '0', 10);
    for (let i = 0; i < cantidadBarcos; i++) {
      const longitud = parseInt(prompt(`¿Cuál es la longitud del barco ${i + 1}? (máx 5)`) || '0', 10);
      this.colocarBarco(longitud);
    }
  }

  private colocarBarco(longitud: number) {
    let colocado = false;
    while (!colocado) {
      const orientacion = Math.random() < 0.5;
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);

      if (this.puedeColocarBarco(x, y, longitud, orientacion)) {
        for (let i = 0; i < longitud; i++) {
          if (orientacion) {
            this.tablero[x][y + i] = 'barco';
          } else {
            this.tablero[x + i][y] = 'barco';
          }
        }
        colocado = true;
      }
    }
  }

  private puedeColocarBarco(x: number, y: number, longitud: number, orientacion: boolean): boolean {
    if (orientacion) { 
      if (y + longitud > 10) return false;
      for (let i = 0; i < longitud; i++) {
        if (this.tablero[x][y + i] !== 'agua') return false;
      }
    } else { 
      if (x + longitud > 10) return false;
      for (let i = 0; i < longitud; i++) {
        if (this.tablero[x + i][y] !== 'agua') return false;
      }
    }
    return true;
  }

  public disparo(x: number, y: number): string {
    if (this.tablero[x][y] === 'barco') {
      this.tablero[x][y] = 'tocado';
      return `¡Tocado en (${x}, ${y})!`;
    } else if (this.tablero[x][y] === 'agua') {
      this.tablero[x][y] = 'fallado';
      return `Fallaste en (${x}, ${y}).`;
    } else {
      return `Ya disparaste a (${x}, ${y}).`;
    }
  }

  public getTablero(): string[][] {
    return this.tablero;
  }

  realizarDisparo(x: number, y: number) {
    const resultado = this.disparo(x, y);
    console.log(resultado);
  }
}


