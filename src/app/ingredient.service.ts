import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Ingredient } from './shared/models/ingredient.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientsUrl = 'api/ingredients';  // URL to web api

  constructor(private http: HttpClient) { }

  getIngredients():Promise<Ingredient[]>{

    return this.http.get<Ingredient[]>(this.ingredientsUrl).toPromise();

  }

  getIngredientById(item:Ingredient):Promise<Ingredient>{
    if(item)
    {
      const itemUrl = `${this.ingredientsUrl}/${item.id}`;

      return this.http.get<Ingredient>(itemUrl).toPromise();
    }
  }

  getIngredientByName(name:string):Promise<Ingredient>{
    if(name)
    {
     return this.getIngredients().then(res=>res.find(item=>item.name==name));
     
    }
  }

  addIngredient(item:Ingredient):Promise<Ingredient>{

    if(item)
    {
       this.http.get<Ingredient[]>(this.ingredientsUrl).subscribe(res=>{
         if(!res.find(result=>result.name==item.name))
         {
             return this.http.post<Ingredient>(this.ingredientsUrl, item, httpOptions).toPromise();
         }
        })     
        return Promise.reject("the item is existing");
    }
  }

  updateIngredient(item:Ingredient):Promise<Ingredient>
  {
    if(item)
    {
      return this.http.put<Ingredient>(this.ingredientsUrl, item, httpOptions).toPromise();
    }
  }

  deleteIngredient(item:Ingredient):Promise<Ingredient>{

    if (item) {

      const itemUrl = `${this.ingredientsUrl}/${item.id}`;

      return this.http.delete<Ingredient>(itemUrl, httpOptions).toPromise();
    }
  }
}
