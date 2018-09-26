import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../shared/models/recipe.model';
import {RecipeService} from '../services/recipe.service'
import {ShopitemService} from '../services/shopitem.service'
import{Ingredient} from '../shared/models/ingredient.model';
import { ShopItem } from '../shared/models/shopitem.model';
import { RecipeSearchService } from '../services/recipe-search.service';

@Component({
  selector: 'app-items',
  template: `{{recipedetails}}`,
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']  
})
export class ItemsComponent implements OnInit {

  listrecipes: Recipe[];

  listShopItems: Ingredient[];
  
  selectedRecipe : Recipe;

  searchStr: string="";

  @Output() cartCountEvent=new EventEmitter();

  constructor(private recipeService:RecipeService,
              private searchService:RecipeSearchService,
              private shopItemService:ShopitemService) 
 { 
   searchService.stringSearch$.subscribe(res=>this.searchStr=res);
   searchService.recipeSelectEvent$.subscribe(res=>
    {
      this.selectedRecipe=res;
     // debugger;
    }
    );
 }

  ngOnInit() 
  {
    this.getRecipes();
  }
  
  getRecipes():void
  {
    this.recipeService.getListRecipes()
    .subscribe(recipes=>
        {
          this.listrecipes=recipes
        }
      );

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
  newRecipe():void
  {
    this.selectedRecipe=undefined;
  }
  buyIngredients():void{

    let item;

    for (let index = 0; index < this.selectedRecipe.ingredients.length; index++) {

      const element = this.selectedRecipe.ingredients[index];

      this.shopItemService.addShopItem(new ShopItem(element,1));
      
    }

    this.getShopCouter();

  }
  getShopCouter():void{
     this.shopItemService.getShopItemsQuantity();  

  }
};
