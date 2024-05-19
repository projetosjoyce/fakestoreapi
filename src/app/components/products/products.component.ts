import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];
  paginatedProducts: ProductModel[] = [];
  totalRecords: number = 0;
  rows: number = 6; // Número de itens por página
  first: number = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: ProductModel[]) => {
      this.products = data;
      this.totalRecords = data.length;
      this.paginateProducts();
    });
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.paginateProducts();
  }

  paginateProducts() {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedProducts = this.products.slice(start, end);
  }
}
