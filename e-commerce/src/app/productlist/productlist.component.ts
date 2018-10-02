import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
import {IProduct} from "../product";

@Component({
  selector: 'ec-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  @Input() title:string;
  @Input() columnLg:number;
  @Input() columMd:number;
  @Input() numOfProducts:number;
  @Input() productShape:string;
  @Input() removeContainerPadding:boolean = false;
  products:IProduct[];
  constructor(private productsSerive:ProductsService) { }

  ngOnInit() {

    this.productsSerive.getProducts().subscribe(
      data=>this.products = data
    );

  }

}
