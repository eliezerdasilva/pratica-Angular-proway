import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrl: './renderizando-listas.component.css'
})
export class RenderizandoListasComponent {

  celulares : Celular[] = [
    {id: 1,nome:"Celular XL", descricao: "Um Celular Grande",esgotado: true }, 
    {id: 2,nome:"Celular XLS", descricao: "Um Celular Pequeno",esgotado: false } 
  ]
}
