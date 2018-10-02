import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {IProduct} from "../product";
import {SessionService} from "../session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ec-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:IProduct;
  quantity:number = 1;
  constructor(private productsService:ProductsService,private sessionService:SessionService,private router:Router) { }

  ngOnInit() {
    this.product = this.sessionService.product;
  }


  incrementNumberOfReservedProducts(){
    this.quantity++;
  }
  decrementNumberOfReservedProducts(){
    if(this.quantity>1){
      this.quantity--;
    }
  }
  addToCart(){
    var productQuantity = {product:this.product,qunatity:this.quantity};
    var products = JSON.parse(localStorage.getItem("cartProducts"));
    if(!this.productIsInCart(products)){
      products.push(productQuantity);
      localStorage.setItem("cartProducts",JSON.stringify(products));
    }
    this.router.navigate(['cart']);
  }
  productIsInCart(products):boolean{
    var exist:boolean = false;
    for(let p of products){
      if(p.product.id == this.product.id)
        exist = true;
    }
    return exist;
  }

}
