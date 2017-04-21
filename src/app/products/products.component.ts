import {Component, OnInit} from '@angular/core';

import {Product} from './product';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './template/products.component.html',
  styleUrls: ['./template/products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProductsList().then((products: Product[]) => {
      this.products = products;
    });
  }
}
