import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  constructor(private service: ProductService, private router: Router) {}

  productForm: FormGroup;

  initForm() {
    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    const tit = this.productForm.controls.title.value;
    const pr = this.productForm.controls.price.value;
    const im = this.productForm.controls.image.value;
    const product: Product = {
      id: (this.service.products.length + 1).toString(),
      image: im,
      price: pr,
      title: tit,
    };
    this.service.addNewProduct(product);
    this.router.navigateByUrl('/home');
  }
}
