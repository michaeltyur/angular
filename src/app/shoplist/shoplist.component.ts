import { Component, OnInit } from '@angular/core';
import{ListShopItems} from '../shared/models/list.shopitems'
import{ShopItem} from '../shared/models/shopitem.model'
import{ShopitemService} from '../shopitem.service'
import{Ingredient} from '../shared/models/ingredient.model'

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

listShopItems=ListShopItems;
selectedItem:ShopItem;

  constructor(private shopItemService:ShopitemService) {
    
   }

  ngOnInit() 
  {
    this.getShopItems();
  }
  getShopItems():void{
    this.shopItemService.getListShopItems()
    .subscribe(shopItems=>this.listShopItems=shopItems);
  }
  onSelect(item: ShopItem): void {
    this.selectedItem = item;
  }
  addNewItem(name:string,amount:string):void{
    this.listShopItems.push(new ShopItem(new Ingredient(name),amount));
  }
  updateItem(name:string,amount:string):void{
    this.selectedItem.name=name;
    this.selectedItem.amount=Number(amount);
  }
}
