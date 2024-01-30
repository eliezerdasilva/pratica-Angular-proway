import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { CursoService } from './curso.service';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'], // Correção aqui: styleUrls em vez de styleUrl
})
export class CursoComponent implements OnInit {
  // URL base
  url = 'http://localhost:80/api/php/';

  //Obejto da classe Curso
  curso = new Curso();
  // Vetor de cursos
  vetor: Curso[] = [];

  // Construtor
  constructor(private curso_servico: CursoService) {}

  ngOnInit(): void {
    //Lista Cursos
    this.selecionar();
  }

  cadastrar(){
    
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      
      (res: Curso[]) => {
        // adicionar dados ao vetor
        this.vetor = res;
        // limpar os atributos do objeto
        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
        // atualiza a lista no front-end
        this.selecionar()
        
      }
    )
  }
  selecionar() {
    this.curso_servico.obterCursos().subscribe((res: Curso[]) => {
      this.vetor = res;
    });
  }

  alterar() {
   this.curso_servico.atualizarCurso(this.curso).subscribe(
    (res:any) => {
      //Atualizar vetor
      this.vetor = res;
      //Limpar Campos
      this.curso.nomeCurso = null;
      this.curso.valorCurso = null;

      //Atualizar
      this.selecionar();

    }
   )
  }

  excluir(){
    this.curso_servico.removerCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;
        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
      }
    )
  }
  //Selecionar Curso
  selecionarCurso(c:Curso){
    this.curso.idCurso = c.idCurso
    this.curso.nomeCurso = c.nomeCurso
    this.curso.valorCurso = c.valorCurso
  }
}
