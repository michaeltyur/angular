import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import{Recipe} from '../shared/models/recipe.model'
import {RecipeService} from '../services/recipe.service'
import { RecipeSearchService } from '../services/recipe-search.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  selectedRecipe : Recipe;

  @Output() recipeSelectEvent = new EventEmitter<Recipe>();

  recipes: Recipe[];

  searchTerms : Subject<string>;

  searchStr:string;

  constructor(private recipeService:RecipeService,private searchService:RecipeSearchService) { 

    this.searchTerms = new Subject<string>();
    this.searchStr="";
  }

  // ngOnInit() {
  //   this.recipes$ = this.searchTerms.pipe(
  //     // wait 300ms after each keystroke before considering the term
  //     debounceTime(300),
  //     // ignore new term if same as previous term
  //     distinctUntilChanged(),
  //     // switch to new search observable each time the term changes
  //     switchMap((term: string) => this.recipeService.searchRecipe(term)),
  //   );
  //   }
  ngOnInit() {
      this.recipeService.searchRecipe(this.searchStr).subscribe(
        res=>this.recipes=res);
    }
  onSelect(recipe:Recipe){
     //this.recipeSelectEvent.emit(recipe);
     this.searchService.search(recipe);
     this.ngOnInit();  
  }
  search(term: string): void 
  {
    //this.searchTerms.next(term);
    if(term&&term.length>1)
     {
       this.recipeService.searchRecipe(term).subscribe(res=>
      {
        this.recipes = res;
        //debugger;
      });
    } 
    else this.recipes=[];
   }
   superSearch(name:string)
   {
     this.searchService.superSearch(name);
    //this.stringSearch$.emit(name);
   }
}
