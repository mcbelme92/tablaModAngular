import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class GetsAllService {

  constructor( ) { }

/*   getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return  data; });
} */
}
