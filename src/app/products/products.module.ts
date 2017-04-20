import {NgModule} from '@angular/core';

import {MaterializeModule} from 'angular2-materialize';

import {ProductsComponent} from './products.component';
import {ProductsFiltersComponent} from './products-filters/products-filters.component';

@NgModule({
  imports: [MaterializeModule],
  declarations: [ProductsComponent, ProductsFiltersComponent]
})
export class ProductsModule {}
