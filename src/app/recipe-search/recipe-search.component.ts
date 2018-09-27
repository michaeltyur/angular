import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Recipe } from '../shared/models/recipe.model'
import { RecipeService } from '../services/recipe.service'
import { RecipeSearchService } from '../services/recipe-search.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  selectedRecipe: Recipe;

  @Output() recipeSelectEvent = new EventEmitter<Recipe>();

  recipes: Recipe[];

  searchTerms: Subject<string>;

  searchStr0: string;
  searchStr1: string;

  constructor(private recipeService: RecipeService, private searchService: RecipeSearchService) {

    this.searchTerms = new Subject<string>();
    this.searchStr0 = "";
    this.searchStr1 = "";
  }

  ngOnInit() {
    //this.search("");
  }
  onSelect(recipe: Recipe) :void
  {

    this.searchService.search(recipe);
    this.searchStr0 = "";
  }
  search(): void {
    this.searchStr1 = "";
    this.superSearch();
    let term=this.searchStr0;
    if (term && term.length > 1) {
      this.recipeService.searchRecipe(term).subscribe(
        res => 
        {
          this.recipes = res;
          setTimeout(() => { this.clearSearchField(); }, 10000);
        },
        err=>console.log('Error Searching Recipe: ', err),
        ()=>console.log('Search Recipe was complete'));
    }
    else this.recipes = [];
  }
  superSearch():void {
    let name = this.searchStr1;
    this.searchService.superSearch(name);
  }

  clearSearchField():void{
    this.recipes = [];
    this.searchStr0 = "";
  }
}
