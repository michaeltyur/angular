import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  current: string;
  recipes: string;
  shopList: string;

  constructor() {
    this.recipes = 'Recipes';
    this.recipes = 'ShopList';
    this.current=this.recipes;
  }

  ngOnInit() {
  }
  onSelect(selected: string): void {
   this.current = selected;
  }

}
