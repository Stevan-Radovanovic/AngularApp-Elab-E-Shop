import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private service: ProductService) {}

  products: Product[] = [];
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.service.productSubject.subscribe(
      (products) => (this.products = products)
    );
  }

  deleteProduct(product: Product) {
    this.service.deleteProduct(product);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
