import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    imgTopName:string;
    urlNow:any;

  constructor(  ) {
  this.imgTopName = 'hunt-the-wumps-01.jpg';
}

  ngOnInit(){

  }



}
