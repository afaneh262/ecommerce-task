import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products:any;
  constructor() { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.products = JSON.parse(localStorage.getItem("cartProducts"));
    for(let i =0;i<this.products.length;i++){
      this.products[i].product.price = this.products[i].product.price.replace("$","");
    }
  }
  toInt(number:string):number{
    return parseInt(number);
  }
  getTotalPrice():number{
    var sum = 0;
    var currentProduct;
    for(let i =0;i<this.products.length;i++){
      currentProduct = this.products[i];
      sum+=this.toInt(currentProduct.product.price)*currentProduct.qunatity;

    }
    return sum;
  }

}
