import { Component, OnInit,Input } from '@angular/core';
import { error } from 'util';

import {ShopitemService} from '../services/shopitem.service';
import {IngredientService} from '../services/ingredient.service';
import {RecipeService} from '../services/recipe.service';
import {MessageService} from '../services/message.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  current: string;

  shopListCount:number=0;
  recipesCount:number=0;
  ingredientsCount:number=0;
  alertStr:string;
  isMessageShow:boolean;

  constructor(private shopItemService:ShopitemService,
              private ingredientService:IngredientService,
              private recipeService:RecipeService,
              private messageService:MessageService) 
  {

    this.current = "Recipes";
  
    recipeService.itemsCounterEmitter$.subscribe(count => this.recipesCount=count);
    shopItemService.countChanged$.subscribe(count =>this.shopListCount=count);
    ingredientService.itemsCounterEmitter$.subscribe(count =>this.ingredientsCount=count);
    messageService.alertMsgEmitter$.subscribe(res=>
      {
       
        this.alertStr=res;
        this.isMessageShow=true;
        this.messageHideShow();
      });
    
  }
  
  ngOnInit() 
  {
    //this.shopItemService.getShopItemsQuantity().subscribe(shopItemsCount=>this.shopListCount=shopItemsCount);
  }

  onSelect(selected: string): void {

   this.current = selected;

  }
  messageHideShow():void{
    setTimeout(() => { this.isMessageShow=false; }, 3000);    
  }
}
