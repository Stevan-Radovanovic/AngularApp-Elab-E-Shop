import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: '1',
      title: 'Voda',
      price: 40,
      image:
        'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '2',
      title: 'Sok',
      price: 60,
      image: 'https://nsnbc.me/wp-content/uploads/2019/07/fruit-juice.jpg',
    },
    {
      id: '3',
      title: 'Špagete',
      price: 80,
      image:
        'https://pbs.twimg.com/profile_images/423290202443251712/HYR23k2c.jpeg',
    },
    {
      id: '4',
      title: 'Makarone',
      price: 90,
      image: 'https://bonapeti.rs/files/lib/600x350/makaroni-vkusensos1.jpg',
    },
  ];

  productSubject = new BehaviorSubject<Product[]>(this.products);

  constructor() {}

  deleteProduct(product: Product) {
    this.products = this.products.filter((prod) => {
      return prod !== product;
    });
    this.productSubject.next(this.products);
  }
}
