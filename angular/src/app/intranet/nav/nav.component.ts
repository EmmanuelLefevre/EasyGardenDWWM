import { Component, OnInit } from '@angular/core';

declare const burgerMenu: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  onClick() {
    burgerMenu();
  }

  constructor() { }

  ngOnInit() {
  }

}
