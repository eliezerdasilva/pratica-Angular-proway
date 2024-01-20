import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] = produtos;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}