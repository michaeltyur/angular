import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import{Recipe} from '../shared/models/recipe.model'
import {RecipeService} from '../recipe.service'
import { RecipeSearchService } from '../services/recipe-search.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  selectedRecipe : Recipe;

  @Output() recipeSelectEvent = new EventEmitter<Recipe>();

  recipes$: Observable<Recipe[]>;

  searchTerms : Subject<string>;

  //stringSearch$ : EventEmitter<string>;
  //stringSearch:string;

  constructor(private recipeService:RecipeService,private searchService:RecipeSearchService) { 

    this.searchTerms = new Subject<string>();
    //this.stringSearch$=new EventEmitter<string>(); 
  }

  ngOnInit() {
    this.recipes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.recipeService.searchRecipe(term)),
    );
    
  }

  onSelect(recipe:Recipe){
     //this.recipeSelectEvent.emit(recipe);
     this.searchService.search(recipe);
     this.ngOnInit();  
  }
  search(term: string): void 
  {
    this.searchTerms.next(term);
  }
   superSearch(name:string)
   {
    this.searchService.superSearch(name);
    //this.stringSearch$.emit(name);
   }
}
