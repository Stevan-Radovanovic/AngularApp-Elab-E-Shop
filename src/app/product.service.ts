import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  products: Product[] = [];

  productSubject = new BehaviorSubject<Product[]>(this.products);

  getProducts() {
    this.http
      .get<Product[]>(
        'https://my-json-server.typicode.com/Stevan-Radovanovic/FakeJSONdb/products'
      )
      .subscribe((response) => {
        this.products = response;
        this.productSubject.next(this.products);
      });
  }

  deleteProduct(product: Product) {
    this.http
      .delete(
        'https://my-json-server.typicode.com/Stevan-Radovanovic/FakeJSONdb/products/' +
          product.id
      )
      .subscribe(() => {
        this.products = this.products.filter((prod) => {
          return prod !== product;
        });
        this.productSubject.next(this.products);
      });
  }

  addNewProduct(product: Product) {
    this.http
      .post(
        'https://my-json-server.typicode.com/Stevan-Radovanovic/FakeJSONdb/products',
        product
      )
      .subscribe((response) => {
        this.products.push(product);
        this.productSubject.next(this.products);
      });
  }
}
