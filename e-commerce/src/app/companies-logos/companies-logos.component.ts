import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-companies-logos',
  templateUrl: './companies-logos.component.html',
  styleUrls: ['./companies-logos.component.scss']
})
export class CompaniesLogosComponent implements OnInit {

  logos = ["./assets/yody-fashion-logo.png",
    "./assets/yody-fashion-logo.png",
    "./assets/yody-fashion-logo.png",
    "./assets/yody-fashion-logo.png",
    "./assets/yody-fashion-logo.png",
    "./assets/yody-fashion-logo.png"];
  constructor() { }

  ngOnInit() {
  }

}
