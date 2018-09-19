 import{Ingredient} from './ingredient.model'
 export class Recipe
 {
     id:number;
     name:string;
     description:string;
     image:string;
     ingredients:Ingredient[];

     constructor(name,description,ingredients?,image?)
     {
       this.name=name;
       this.description=description;
       this.ingredients=ingredients;
       if(!image)
         this.image="http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg";
       else this.image=image;
     }
   }