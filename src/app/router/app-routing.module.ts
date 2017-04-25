import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from '../about/about.component';
import {HelloWorldComponent} from '../misc/hello-world.component';
import {ProductsComponent} from '../products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },  // pathMatch: The whole URL needs to match otherwise it will fall on this
      // route.
  {path: 'about', component: AboutComponent},
  {path: 'misc', component: HelloWorldComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
