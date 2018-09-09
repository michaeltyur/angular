import { Component, OnInit } from '@angular/core';
import {ListShopItems} from '../shared/models/list.shopitems'
import {ShopItem} from '../shared/models/shopitem.model'
import {ShopitemService} from '../shopitem.service'
import {Ingredient} from '../shared/models/ingredient.model'
import {MessageService} from '../message.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

listShopItems=ListShopItems;
selectedItem:ShopItem;

  constructor(private shopItemService:ShopitemService,private messageService:MessageService) {}

  ngOnInit() 
  {
    this.getShopItems();
  }
  getShopItems():void{
    this.shopItemService.getListShopItems()
    .subscribe(shopItems=>this.listShopItems=shopItems);
  }
  addNewItem(name:string,amount:string):void{
    if(name && amount)
    {
        this.shopItemService.addShopItem(new ShopItem(new Ingredient(name),amount));
        this.messageService.add('Item '+{name}+' are aded');
    }
    else this.messageService.add('The fields can not be empty');
    //this.listShopItems.push(new ShopItem(new Ingredient(name),amount));
  }
  updateItem(name:string,amount:string):void{
    //this.shopItemService.updateShopItem(this.selectedItem.id,name,amount);
    if(name && amount)
    {
      this.selectedItem.name=name;
      this.selectedItem.amount=Number(amount);
      this.messageService.add('Item'+{name}+' are updated');
    }
    else this.messageService.add('The fields can not be empty');    
  }
  removeItem(id:number):void{
    this.shopItemService.deletShopItem(id);
  }
  onSelect(item: ShopItem): void {
    this.selectedItem = item;
  }
}
