import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(private produtosService: ProdutoService) {}
  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }
}
