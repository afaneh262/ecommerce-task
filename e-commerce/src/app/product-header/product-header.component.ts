import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'ec-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent implements OnInit {

  @Input() title:string;
  constructor() { }

  ngOnInit() {
  }

}
