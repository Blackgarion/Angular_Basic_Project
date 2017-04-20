import {Component} from '@angular/core';

@Component({
  selector: 'app-products-filters',
  templateUrl: './template/products-filters.component.html',
  styleUrls: ['./template/products-filters.component.scss']
})
export class ProductsFiltersComponent {
  isFreeChecked: Boolean = false;
  isTechnologyChecked: Boolean = false;
}
