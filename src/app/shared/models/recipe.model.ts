 export class Recipe
 {
     id:number;
     name:string;
     description:string;
     ingredients:string;
     constructor(name,description,ingredients)
     {
       this.name=name;
       this.description=description;
       this.ingredients=ingredients;
     }
   }