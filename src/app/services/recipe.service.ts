import { Injectable,EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {Recipe} from '../shared/models/recipe.model'
import {MessageService} from './message.service'
import {IngredientService} from './ingredient.service'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private recipesUrl = 'api/recipes';  // URL to web api

  itemsCounterEmitter$ = new EventEmitter();

  recipeUpdatedEmitter$ = new EventEmitter();

  recipeDeletedEmitter$ = new EventEmitter();

  constructor(
    private http: HttpClient,
    private messageService:MessageService,
    private ingredientService:IngredientService) { 

      this.getItemsCount();
     }

    getItemsCount():void
    {
      this.getListRecipes().subscribe(res=> this.itemsCounterEmitter$.emit(res.length));
    }
    

  getListRecipes():Observable<Recipe[]>
  {
    let recipes= this.http.get<Recipe[]>(this.recipesUrl);
    recipes.subscribe(res=>this.getItemsCount());
    return recipes;
  }
 
  getRecipe(id: number): Observable<Recipe> 
  {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url).pipe(
      tap(_ => {}),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`)));
  }
    /** GET hero by id. Return `undefined` when id not found */
    // getHeroNo404<Data>(id: number): Observable<Recipe> {
    //   const url = `${this.recipesUrl}/?id=${id}`;
    //   return this.http.get<Recipe[]>(url)
    //     .pipe(
    //       map(recipe => recipe[0]), // returns a {0|1} element array
    //       tap(r => {
    //         const outcome = r ? `fetched` : `did not find`;
    //         this.log(`${outcome} recipe id=${id}`);
    //       }),
    //       catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    //     );
    // }
  /** PUT: update the hero on the server */
  updateRecipe (recipe: Recipe): Observable<any> 
  {
    return this.http.put(this.recipesUrl, recipe, httpOptions).pipe(
    tap(
      (next)=> {}),
     (error)=>{
      //this.messageService.add("an error has occurred", "alert-warning");
      console.log(error);
      return error;
    },
    (complete)=>
    {
      this.messageService.add("Recipe are updated", "alert-success");
      return complete;
    });    
  }
/** POST: add a new recipe to the server */
  addRecipe(recipe:Recipe):Observable<Recipe>
  {
      return this.http.post<Recipe>(this.recipesUrl,recipe,httpOptions).pipe(
      tap(
        (_recipe) => 
       {
          _recipe.ingredients.forEach(
            (element) => 
            this.ingredientService.addIngredient(element));//add ingredient to data base            
          }),
          (error)=>{ 
           // this.messageService.add("an error has occurred", "alert-warning");
            console.log(error) ;
            return error;
          },
            (complite)=>{
              this.messageService.add("Recipe are added", "alert-success");
              this.getItemsCount();//send callback about update recipes quantity
              return complite;
        });
  }
  /** DELETE: delete the recipes from the server */
  deleteRecipe(recipe:Recipe | number):Observable<Recipe>{
    const id =typeof recipe === 'number' ?recipe:recipe.id;
    const url = `${this.recipesUrl}/${id}`;

    return this.http.delete<Recipe>(url,httpOptions).pipe(
      tap((res:Recipe)=>
        {
          this.getItemsCount();//send callback about update recipes quantity
          this.recipeDeletedEmitter$.emit(recipe);
        }
      ),
      error=>{ 
        //this.messageService.add("an error has occurred", "alert-warning");
        console.log(error);
        return error},
      complite=>{
        this.messageService.add("Recipe are deleted", "alert-danger");
        return complite});
  }

  /* GET recipe whose name contains search term */
  searchRecipe(term:string):Observable<Recipe[]>
  {    
    if(!term)return of([]);

    return this.http.get<Recipe[]>(`${this.recipesUrl}/?name=${term}`);

  }
  searchRecipeByName(str:string):Observable<Recipe[]>
  {    
    if(!str)return of([]);
     return this.getListRecipes().pipe(tap(res=>res.filter(item=>item.name.includes(str))));
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`,"alert-warning");
 
    // Let the app keep running by returning an empty result.
    return of(result as T);};
  }
   /** Log a HeroService message with the MessageService */
    private log(message: string,typeAlert:string) 
    {
      this.messageService.add( message, typeAlert);
    }
}
