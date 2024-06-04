import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.scss'
})
export class ListaProdutosComponent {
  @Output() selectedEvent = new EventEmitter<ProductModel>();

  public loading = false;
  public showError = false;
  public products: ProductModel[] = [];

  constructor(private productService: ProductsService) {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.showError = true;
      }
    })
  }

  public onSelected(product: ProductModel): void {
    this.selectedEvent.emit(product);
  }

}
