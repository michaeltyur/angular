import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import{ShopItem} from '../app/shared/models/shopitem.model'
import{ListShopItems} from '../app/shared/models/list.shopitems'
import { Ingredient } from './shared/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShopitemService {

// Observable string sources
private emitChangeSource = new Subject<any>();
// Observable string streams
changeEmitted$ = this.emitChangeSource.asObservable();
// Service message commands
emitChange(change: any) {
    this.emitChangeSource.next(change);
}

  constructor() { }
  getListShopItems():Observable<ShopItem[]>{
    return of(ListShopItems);
  }
  getShopItem(name: string): Observable<ShopItem> {
    return of(ListShopItems.find(shopitem => shopitem.name === name));
  }
  deletShopItem(id:number):Observable<ShopItem[]>{
    const index: number = ListShopItems.indexOf(ListShopItems.find(i=>i.id==id));
    if(index>=0)
      return of(ListShopItems.splice(index,1));
  }
  addShopItem(item:ShopItem):Observable<number>{

     item.id=ListShopItems.length;

    return of(ListShopItems.push(item));
  }

  onBuyShopItem(id:number):Observable<ShopItem>{
    
   let item=of(ListShopItems.find(shopitem => shopitem.name === name))
   item[0].isPurchased=true;
    return item;
  }
  getShopItemsQuantity():Observable<any>{
   let quantity =  of(ListShopItems.length);
    return quantity;
  }
}
