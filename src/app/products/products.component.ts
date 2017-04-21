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
  display: Boolean = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProductsList().then((products: Product[]) => {
      this.products = products;
    });
  }

  onDisplay(display: Boolean) {
    this.display = display;
    console.log(display);
  }
}
