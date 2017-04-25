import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {MaterializeModule} from 'angular2-materialize';

import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {MiscelaneousModule} from './misc/misc.module';
import {NavBarComponent} from './navbar/navbar.component';
import {ProductsModule} from './products/products.module';
import {AppRoutingModule} from './router/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, MaterializeModule,
    MiscelaneousModule, ProductsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
