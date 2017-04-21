import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-products-filters',
  templateUrl: './template/products-filters.component.html',
  styleUrls: ['./template/products-filters.component.scss']
})
export class ProductsFiltersComponent {
  display: Boolean = false;
  isFreeChecked: Boolean = false;
  isTechnologyChecked: Boolean = false;

  @Output()
  onDisplay = new EventEmitter<Boolean>();
  @Output()
  onFreeChecked = new EventEmitter<Boolean>();
  @Output()
  onTechnologyChecked = new EventEmitter<Boolean>();

  onDisplayClick() {
    this.onDisplay.emit(this.display);
  }

  onFreeClick() {
    this.onFreeChecked.emit(!this.isFreeChecked);
  }

  onTechnologyClick() {
    this.onTechnologyChecked.emit(!this.isTechnologyChecked);
  }
}
