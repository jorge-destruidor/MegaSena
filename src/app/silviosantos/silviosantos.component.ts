import { Component } from '@angular/core';

@Component({
  selector: 'app-silviosantos',
  templateUrl: './silviosantos.component.html',
  styleUrls: ['./silviosantos.component.css']
})
export class SilvioSantosComponent {
  public sorteio: number[] = [];
  public aposta: number[] = [];
  public numerosAcertados: number = 0;

  constructor() { }

  verificarAcertos() {
    this.numerosAcertados = this.aposta.filter(num => this.sorteio.includes(num)).length;
  }
}
