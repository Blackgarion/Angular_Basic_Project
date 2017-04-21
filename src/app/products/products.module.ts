import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {MaterializeModule} from 'angular2-materialize';

import {ProductsFiltersComponent} from './products-filters/products-filters.component';
import {ProductsComponent} from './products.component';
import {ProductsService} from './products.service';

@NgModule({
  imports: [CommonModule, HttpModule, MaterializeModule],
  declarations: [ProductsComponent, ProductsFiltersComponent],
  providers: [ProductsService]
})
export class ProductsModule {
}
