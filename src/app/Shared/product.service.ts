import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) {}



  getCategories(): Observable<Object> {
  return this.http.get(`http://heimtexx.com/stock-de/restapi/categories?type=live&username=info@heimtexx.co.uk&password=M95jrwB7tg55`);
  }

  getProducts(): Observable<Object> {
    return this.http.get(`http://heimtexx.com/stock-de/restapi/products?type=live&username=info@heimtexx.co.uk&password=M95jrwB7tg55`);
    }

    getProductDetails(productId): Observable<Object> {
      return this.http.get(`http://heimtexx.com/stock-de/restapi/product?type=live&username=info@heimtexx.co.uk&password=M95jrwB7tg55&uniqueid=${productId}`);
      }


}
