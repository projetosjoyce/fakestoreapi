import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [MessageService]
})
export class ProductsComponent implements OnInit {
  layout: 'list' | 'grid' = 'list';
  products: ProductModel[] = [];
  filteredProducts: ProductModel[] = [];
  selectedProducts: ProductModel[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';
  first: number = 0;
  rows: number = 10;
  totalRecords: number = 0;

  constructor(
    private productService: ProductsService,
    private messageService: MessageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: ProductModel[]) => {
      this.products = data;
      this.totalRecords = this.products.length;
      this.filterProducts();
    });
  }

  switchToListView() {
    this.layout = 'list';
    this.clearSelection();
  }

  switchToGridView() {
    this.layout = 'grid';
    this.clearSelection();
  }

  toggleSelection(product: ProductModel) {
    const index = this.selectedProducts.indexOf(product);
    if (index === -1) {
      this.selectedProducts.push(product);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item adicionado com sucesso' });
    } else {
      this.selectedProducts.splice(index, 1);
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Item removido com sucesso' });
    }
  }

  clearSelection() {
    this.selectedProducts = [];
  }

  isSelected(product: ProductModel): boolean {
    return this.selectedProducts.includes(product);
  }

  filterProductsByCategory() {
    this.first = 0;
    this.filterProducts();
  }

  filterProducts() {
    let tempProducts = this.products;

    if (this.selectedCategory && this.selectedCategory !== 'all') {
      tempProducts = tempProducts.filter(product =>
        product.category.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    }

    if (this.searchQuery) {
      tempProducts = tempProducts.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.filteredProducts = tempProducts.slice(this.first, this.first + this.rows);
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.filterProducts();
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
