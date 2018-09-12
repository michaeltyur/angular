import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

import { Recipe } from '../shared/models/recipe.model';
import {RecipeService} from '../recipe.service'
import {ShopitemService} from '../shopitem.service'
import { MessageService } from '../message.service';
import {ListShopItems} from '../shared/models/list.shopitems'
import{Ingredient} from '../shared/models/ingredient.model';
import { ShopItem } from '../shared/models/shopitem.model';

@Component({
  selector: 'app-items',
  template: `{{recipedetails}}`,
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']  
})
export class ItemsComponent implements OnInit {

  listrecipes:Recipe[];

  listShopItems:Ingredient[];
  
  selectedRecipe : Recipe;

  @Output() cartCountEvent=new EventEmitter();

  constructor(private recipeService:RecipeService,private messageService: MessageService,private shopItemService:ShopitemService) { }

  ngOnInit() 
  {
    this.getRecipes();
  }
  getRecipes():void
  {
    //this.messageService.add('RecipeService: fetched recipe');
    this.recipeService.getListRecipes()
    .subscribe(recipes=>this.listrecipes=recipes);

  }
  getShopItems():void
  {
    this.recipeService.getListRecipes()
    .subscribe(recipes=>this.listrecipes=recipes);

  }
  onSelect(recipe: Recipe): void 
  {
    this.selectedRecipe = recipe;
  }
  onSelectfromSearch($event){
    this.selectedRecipe=$event;
  }
  newRecipe():void
  {
    this.selectedRecipe=undefined;
  }
  buyIngredients():void{
    let item;
    
    for (let index = 0; index < this.selectedRecipe.ingredients.length; index++) {
      const element = this.selectedRecipe.ingredients[index];

      this.shopItemService.getShopItem(element.name).subscribe(el=>item=el)

      //check if ingredient allready exists
      if(!item)
        this.shopItemService.addShopItem(new ShopItem(element,1)).subscribe();//add new ingredient
      else item.amount++;//increase quantity
    }
    let count;
    this.shopItemService.getShopItemsQuantity().subscribe(quantity=>count=quantity);  
    //this.cartCountEvent.emit(count);
    this.shopItemService.emitChange(count);
  }
};
