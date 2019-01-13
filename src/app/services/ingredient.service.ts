import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../services/message.service';

import { Ingredient } from '../shared/models/ingredient.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientsUrl = 'api/ingredients'; 

  itemsCounterEmitter$=new EventEmitter();

  constructor(private http: HttpClient,
              private messageService:MessageService) {
    this.getItemsCount()
   }
  getItemsCount():void{
    this.getIngredients().then(res=>this.itemsCounterEmitter$.emit(res.length));
  }

  getIngredients():Promise<Ingredient[]>{

    return this.http.get<Ingredient[]>(this.ingredientsUrl).pipe(tap(complite=>{this.getItemsCount()})).toPromise();

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
      let promise;
       this.http.get<Ingredient[]>(this.ingredientsUrl).subscribe(res=>{
         if(!res.find(result=>result.name==item.name))
         {
          promise = this.http.post<Ingredient>(this.ingredientsUrl, item, httpOptions).pipe(
               tap(
                 next=>{
                         this.messageService.add("Ingredient "+next.name+" are added","alert-success");
                  },
                 error=> {
                           this.messageService.add("an error has occurred","alert-warning");
                           console.log(error);
                         },
                 ()=>{                            //success
                             this.getItemsCount();                            
                            } 
               )).toPromise();         
              
            }
          })   
         return promise;
    }
  }

  updateIngredient(item:Ingredient):Promise<Ingredient>
  {
    if(item)
    {
      return this.http.put<Ingredient>(this.ingredientsUrl, item, httpOptions).toPromise();
    }
  }

  removeIngredient(item:Ingredient):Promise<Ingredient>{

    if (item) {

      const itemUrl = `${this.ingredientsUrl}/${item.id}`;

      return this.http.delete<Ingredient>(itemUrl, httpOptions).pipe(tap(
        next=>{},
        error=>{},
        ()=>{
              this.messageService.add("service=>The Ingredient is deleted","alert-danger")
              this.getItemsCount();
            }))
            .toPromise();
    }
  }
  private sendMessage(message: string,typeAlert:string) 
  {
    this.messageService.add( message, typeAlert);
  }
}
