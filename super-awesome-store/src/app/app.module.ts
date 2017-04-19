import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MaterializeModule} from 'angular2-materialize';

import {AppRoutingModule} from './router/app-routing.module';
import {ProductsModule} from './products/products.module';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {NavBarComponent} from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavBarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
