import { Injectable } from '@angular/core';
import {IProduct} from "./product";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _product:IProduct;


  get product(): IProduct {
    return this._product;
  }

  set product(value: IProduct) {
    this._product = value;
  }

  constructor(){}

}
