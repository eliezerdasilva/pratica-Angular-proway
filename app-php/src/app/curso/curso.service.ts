import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, filter, map} from 'rxjs/operators'
import { Curso } from './curso';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  //URL
  url = "http://localhost:80/api/php/"
  //Vetor
  vetor: Curso[] = [];
  //Contrutor
  constructor(private http: HttpClient) { }
  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res:any) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
      )
    }
    cadastrarCurso(c:Curso):Observable<Curso[]>{
      return this.http.post(this.url+'cadastrar', {cursos:c}).pipe(
        map((res:any) => {
          this.vetor.push(res['cursos']);
         
          return this.vetor;
        })
      )
    }
    //Remover curso
    removerCurso(c: Curso):Observable<Curso[]>{
    
      const params = new HttpParams().set("idCurso", c.idCurso!.toString());
      return this.http.delete(this.url + "excluir", {params: params}).pipe(
       map((res) => {
        const filtro = this.vetor.filter((curso) => {
          return +curso['idCurso']! !== +c.idCurso!;
        });
        return this.vetor = filtro;
       }) 
      )
    }
    atualizarCurso(c:Curso):Observable<Curso[]>{
      //Executa a operacao via URL
      return this.http.patch(this.url+'alterar',{cursos:c})
      //Percorrer o vetor para saber qual é o id curso alterado
      .pipe(map((res:any)=>{
        const cursoAlterado= this.vetor.find((item)=>{
          return +item['idCurso']! === +['idCurso'];
        });
        //Alterado o valor do vetor
        if(cursoAlterado){
          cursoAlterado['nomeCurso']=c['nomeCurso']
          cursoAlterado['valorCurso']=c['valorCurso']
        }
        //Retorno
        return this.vetor;
      }))
    }
    
}
