import { Component, OnInit,Input } from '@angular/core';

import {ShopitemService} from '../shopitem.service'
import {MessageService} from '../message.service'
import { error } from 'util';


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

  constructor(private shopItemService:ShopitemService,private messageService:MessageService) 
  {
    this.recipes = 'Recipes';
    this.recipes = 'ShopList';
    this.current = this.recipes;
    this.shopListCount = 0;

    shopItemService.changeEmitted$.subscribe(count => this.shopListCount=count);
  }

  ngOnInit() 
  {
    //this.shopItemService.getShopItemsQuantity().subscribe(shopItemsCount=>this.shopListCount=shopItemsCount);
  }

  onSelect(selected: string): void {
   this.current = selected;
  }
  
}
