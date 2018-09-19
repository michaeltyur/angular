import { Injectable,Output,EventEmitter} from '@angular/core';
import { Observable, of,Subject } from 'rxjs'; 
import { Recipe } from '../shared/models/recipe.model';

@Injectable({
    providedIn: 'root',
  })

export class RecipeSearchService{
  
    recipeSelectEvent$ : EventEmitter<Recipe>;
  
    stringSearch$ : EventEmitter<string>;

    constructor(){

        this.recipeSelectEvent$ = new EventEmitter();
        this.stringSearch$=new EventEmitter<string>(); 
    }
    search(recipeSelect: Recipe): void 
    {
      this.recipeSelectEvent$.emit(recipeSelect);
    }
     superSearch(name:string)
     {
      this.stringSearch$.emit(name);
     }
}