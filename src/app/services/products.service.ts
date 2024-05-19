import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.url);
  }

  createProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.url, product);
  }
}
