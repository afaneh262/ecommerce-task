import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "./product";
import {Observable} from "rxjs/internal/Observable";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {}

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://demo2653115.mockable.io/products');
  }

}
