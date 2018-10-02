import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../product";
import {SessionService} from "../session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ec-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product:IProduct;
  @Input() productShape:string;
  @Input() removeBorder:boolean = false;
  constructor(private sessionService:SessionService,private router:Router) { }

  ngOnInit() {
  }

  goToProductDetails(id:number){
    this.router.navigate(['/product']);
    this.sessionService.product = this.product;
  }
}


