import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'ec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    if(localStorage.getItem("cartProducts") === null){
      localStorage.setItem("cartProducts",JSON.stringify(new Array()));
    }
    /*localStorage.removeItem("cartProducts");*/

  }

}
