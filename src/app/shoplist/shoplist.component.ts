import { Component, OnInit } from '@angular/core';
import {ShopItem} from '../shared/models/shopitem.model'
import {ShopitemService} from '../services/shopitem.service'
import {Ingredient} from '../shared/models/ingredient.model'
import {MessageService} from '../services/message.service';
import { reject } from 'q';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

listShopItems:ShopItem[];

selectedItem:ShopItem;

count:any;

  constructor(private shopItemService:ShopitemService,private messageService:MessageService) {}

  ngOnInit() 
  {
    this.getShopItems();
  }

  getShopItems():void{
    this.shopItemService.getListShopItems()
    .then(shopItems=>this.listShopItems=shopItems);

  }

  addNewItem(name:string,amount:string):void{
    
    if(name && amount)
    {
        this.shopItemService.addShopItem(new ShopItem(new Ingredient(name),amount)).then(res=>
          {
            this.getShopItems();
          });       
    }
    else console.error('The fields can not be empty');

  }

  updateItem(name:string,amount:string):void{
 
    if(name && amount)
    {
      this.selectedItem.name=name;
      this.selectedItem.amount=Number(amount);
      this.shopItemService.updateShopItem(this.selectedItem);
    }
    else console.error('The fields can not be empty');    
  }

  removeItem(item: ShopItem):void{

      this.shopItemService.deleteShopItem(item).then(res=>{
          this.getShopItems();
          this.selectedItem=undefined;
    },reject=>console.error(reject));
  
    
  }

  onSelect(item: ShopItem): void {
    this.selectedItem = item;
  }

}
