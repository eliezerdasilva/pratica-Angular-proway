import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit{
removerProdutoCarrinho(arg0: number) {
throw new Error('Method not implemented.');
}
  itensCarrinho: IProdutoCarrinho[] =[];
  constructor(public carrinhoService: CarrinhoService){
    
  }
  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
  }
  removeProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
  }
}
