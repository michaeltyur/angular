import { Injectable,EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map, filter, find } from 'rxjs/operators';

import { ShopItem } from '../shared/models/shopitem.model'
import { Ingredient } from '../shared/models/ingredient.model';
import { IngredientService } from './ingredient.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ShopitemService {

  quantity: number;

  private shopItemsUrl = 'api/shopitems';  // URL to web api

  public countChanged$: EventEmitter<number>;

  constructor(private http: HttpClient,private ingredientService:IngredientService) {

    this.getShopItemsQuantity();//send to subscrubers Quantity of items list
    this.countChanged$ = new EventEmitter();//event for changed counter of shop items
   }

  getListShopItems(): Promise<ShopItem[]> {

    return this.http.get<ShopItem[]>(this.shopItemsUrl).toPromise();

  }

  getShopItemById(item: ShopItem): Promise<ShopItem> {

    if(item)
    {
      const itemUrl = `${this.shopItemsUrl}/${item.id}`;

      return this.http.get<ShopItem>(itemUrl).toPromise();
    }
    
  }

  getShopItemByName(name: string): Promise<ShopItem> {

    if(name)
    {
      return this.http.get<ShopItem[]>(this.shopItemsUrl).pipe(
                       map(items => items.find(result => result.name == name))
                      ).toPromise();
    }   
  }

  addShopItem(item: ShopItem): Promise<ShopItem> {

    let promise;
    if(item)
    {
       promise = this.getShopItemByName(item.name).then(res=>{
        if(res)
        {
          res.amount=item.amount;
          console.log("the item is exist");
          promise = this.updateShopItem(res);
        }
        else{
            promise = this.http.post<ShopItem>(this.shopItemsUrl, item, httpOptions).toPromise();
            this.ingredientService.addIngredient(item.ingredient);
            console.log("the item is edded");
            promise.then(res => this.getShopItemsQuantity());
        }
      })  
      return promise; 
    }
    

  }

  updateShopItem(item: ShopItem): Promise<ShopItem> {

    if(item)
    {
      let promise = this.http.put<ShopItem>(this.shopItemsUrl, item, httpOptions).toPromise();

      promise.then(res => this.getShopItemsQuantity());

      return promise;
    }
  }

  deleteShopItem(item: ShopItem): Promise<ShopItem> {

    if (item) {
      const itemUrl = `${this.shopItemsUrl}/${item.id}`;

      let promise = this.http.delete<ShopItem>(itemUrl, httpOptions).toPromise();

      promise.then(res => this.getShopItemsQuantity());

      return promise;
    }
  }

  getShopItemsQuantity(): Observable<any> {

    let number;

    this.http.get<ShopItem[]>(this.shopItemsUrl).subscribe(result => {
      number = result.length
      //this.emitChange(result.length);
      this.countChanged$.emit(result.length);
    });

    return number;

  }
}
