import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Product} from './product';

@Injectable()
export class ProductsService {
  private readonly PRODUCTS_URL = '/assets/data/products.json';
  constructor(private http: Http) {}
  public getProductsList(): Promise<Product[]> {
    return this.http.get(this.PRODUCTS_URL)
        .map((response) => {
          return response.json() as Product[];
        })
        .toPromise()
        .catch((error: Error) => {
          console.log(error);
        });
  }
}
