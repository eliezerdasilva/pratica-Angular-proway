import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {
  nome = "Eli";
  dataNascimento = "1996-02-05";
  urlImagem= "/assets/image.png"

  mostrarDataNascimento(){
    alert(`A data de Nascimento : ${this.dataNascimento}`);
  } 
}
