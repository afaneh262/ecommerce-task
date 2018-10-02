import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialIcons = [
    'fa fa-facebook',
    'fa fa-twitter',
    'fa fa-google',
    'fa fa-twitter',
    'fa fa-instagram',
  ];
  constructor() { }

  ngOnInit() {
  }

}
