import { Component, OnInit,Input } from '@angular/core';
import {ListShopItems} from '../shared/models/list.shopitems'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  current: string;
  recipes: string;
  shopList: string;
  @Input() shopListCount:number;

  constructor() {
    this.recipes = 'Recipes';
    this.recipes = 'ShopList';
    this.current=this.recipes;
    this.shopListCount=0;
  }

  ngOnInit() {}

  onSelect(selected: string): void {
   this.current = selected;
  }
  chahgeShopListCount($event)
  {
   this.shopListCount=$event;
  }
}
