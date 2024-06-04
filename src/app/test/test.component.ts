import { Component, EventEmitter } from '@angular/core';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CarrinhoComponent,
    ListaProdutosComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  public productEvent = new EventEmitter<ProductModel>();
}
