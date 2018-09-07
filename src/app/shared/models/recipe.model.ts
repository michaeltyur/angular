 import{Ingredient} from './ingredient.model'
 export class Recipe
 {
     id:number;
     name:string;
     description:string;
     ingredients:Ingredient[];

     constructor(name,description,ingredients?)
     {
       this.name=name;
       this.description=description;
       this.ingredients=ingredients;
     }
   }