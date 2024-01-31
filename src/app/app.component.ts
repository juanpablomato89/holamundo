import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = 'Juan Pablo';
  textoplaceholder = 'Escriba algo aqui';
  deshabilitado = true;

  constructor() {
    setInterval(() => this.nombre = 'Yudi', 3500);
    setInterval(() => this.deshabilitado = false, 3500);

  }

  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
}
