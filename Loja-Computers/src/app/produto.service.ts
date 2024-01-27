import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos : IProduto[] = produtos;

  constructor() { }
  getAll(){
    return this.produtos;

  }
  getOne(produtoID : number){
    return this.produtos.find(produto => produto.id === produtoID)
  }
}
