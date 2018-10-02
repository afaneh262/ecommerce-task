import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss']
})
export class BottomNavbarComponent implements OnInit {

  links = [
   'home',
   'shop',
   'pages',
   'lookbook',
   'brands'
  ];
  constructor() { }

  ngOnInit() {
  }

}
