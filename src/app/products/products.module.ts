import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterializeModule} from 'angular2-materialize';

import {FreeProductsFilterPipe} from './pipes/free-products-filter.pipe';
import {TechnologyFilterPipe} from './pipes/technology-filter.pipe';
import {ProductsFiltersComponent} from './products-filters/products-filters.component';
import {ProductsComponent} from './products.component';
import {ProductsService} from './products.service';
import {ResizeDirective} from './resize.directive';

@NgModule({
  imports: [CommonModule, FormsModule, HttpModule, MaterializeModule],
  declarations: [
    FreeProductsFilterPipe, ResizeDirective, ProductsComponent,
    ProductsFiltersComponent, TechnologyFilterPipe
  ],
  providers: [ProductsService]
})
export class ProductsModule {
}
