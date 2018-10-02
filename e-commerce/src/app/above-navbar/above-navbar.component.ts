import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-above-navbar',
  templateUrl: './above-navbar.component.html',
  styleUrls: ['./above-navbar.component.scss']
})
export class AboveNavbarComponent implements OnInit {

  links = [
    {class:'fa fa-rotate-left fa-rotate-180 fa-flip-vertical fa-2x',numOfNotifications:5,href:'#'},
    {class:'fa fa-heart fa-2x',numOfNotifications:0,href:'#'},
    {class:'fa fa-shopping-cart fa-2x',numOfNotifications:1,href:'#'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
