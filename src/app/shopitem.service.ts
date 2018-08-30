import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import{ShopItem} from '../app/shared/models/shopitem.model'
import{ListShopItems} from '../app/shared/models/list.shopitems'


@Injectable({
  providedIn: 'root'
})
export class ShopitemService {

  constructor() { }
  getListShopItems():Observable<ShopItem[]>{
    return of(ListShopItems);
  }
  getShopItems(name: string): Observable<ShopItem> {
    return of(ListShopItems.find(shopitem => shopitem.name === name));
  }

}
