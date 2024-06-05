import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent implements OnInit {
  @Input({ required: true }) productEvent!: EventEmitter<ProductModel>;

  public products: { product: ProductModel, amount: number }[] = [];

  // Tenho na minha list 5 produtos diferentes
  // Cada Produto eu tenho 10 quantidas
  // por tanto eu tenho 50 items

  ngOnInit(): void {
    this.productEvent.subscribe((product) => {
      const productIndex = this.products.findIndex((f) => f.product.id === product.id);

      if (productIndex < 0) {
        this.products.push({ product, amount: 1 })
      } else {
        this.products[productIndex].amount++;
      }
    });
  }

  public calcPrice(product: ProductModel, amount: number): string {
    return (Number(product.price) * amount).toFixed(2);
  }

  public removeProduct(product: ProductModel): void {
    const productIndex = this.products.findIndex((f) => f.product.id === product.id);

    if (productIndex < 0) {
      return;
    }

    if (this.products[productIndex].amount <= 1) {
      this.products.splice(productIndex, 1);
    } else {
      this.products[productIndex].amount--;
    }

  }

  public getTotalAmount(): number {
    return this.products.reduce((total, product) => total + product.amount, 0);
  }

}
