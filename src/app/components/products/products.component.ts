import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';
import { MessageService } from 'primeng/api';  // Import MessageService

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [MessageService]  // Add MessageService to providers
})
export class ProductsComponent implements OnInit {
  layout: 'list' | 'grid' = 'list';
  products: ProductModel[] = [];
  filteredProducts: ProductModel[] = [];
  selectedProducts: ProductModel[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';

  constructor(
    private productService: ProductsService,
    private messageService: MessageService  // Inject MessageService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: ProductModel[]) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  switchToListView() {
    this.layout = 'list';
    this.clearSelection();
    console.log('List View');
  }

  switchToGridView() {
    this.layout = 'grid';
    this.clearSelection();
    console.log('Grid View');
  }

  toggleSelection(product: ProductModel) {
    const index = this.selectedProducts.indexOf(product);
    console.log('product', product)
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
    if (this.selectedCategory && this.selectedCategory !== 'all') {
      this.filteredProducts = this.products.filter(product =>
        product.category.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  filterProducts() {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }


}

