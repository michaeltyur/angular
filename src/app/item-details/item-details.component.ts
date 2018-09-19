import { Component, OnInit, Input, Output,EventEmitter, DoCheck } from '@angular/core';
import{Location} from '@angular/common'
 
import{Recipe} from'../shared/models/recipe.model';
import{RecipeService} from '../services/recipe.service';
import { MessageService } from '../message.service';
import{Ingredient} from '../shared/models/ingredient.model'
import { ItemsComponent } from '../items/items.component';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  @Input() listrecipes: Recipe[];

  @Input() listOfIngredients:Ingredient[];

  @Output() recipeChanged: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  @Output() listrecipesChange: EventEmitter<Recipe[]> = new EventEmitter<Recipe[]>();

  constructor(
              private recipeService:RecipeService,
              private location:Location,
              private messageService: MessageService) {

    this.listOfIngredients=[];
  }

  ngOnInit() {}
  
  listOfRecipesChanged() 
  {
    this.listrecipesChange.emit(this.listrecipes);
  }
  recipeDidChanged() 
  {
    this.recipeChanged.emit(this.recipe);
  }

  updateRecipe(name: string, description: string): void{
     
    //send message to message area
     this.messageService.add("Recipe " + this.recipe.name + " are updated");

     this.recipe.name = name;
     this.recipe.description = description;

     if(this.listOfIngredients.length>0)//add ingredients array if not empty
        this.recipe.ingredients =this.listOfIngredients;

     this.recipeService.updateRecipe(this.recipe).subscribe();

     this.listOfRecipesChanged();

     this.recipe = undefined;
     
     this.recipeDidChanged() ;

   }

   addNewRecipe(name:string, description:string): void{
    if(!name && !description)
    {
      this.messageService.add("The fields cannot be empty");
      return;
    }

     this.recipe=new Recipe(name,description,this.listOfIngredients);

     this.recipeService.addRecipe(this.recipe).subscribe();

     this.listrecipes.push(this.recipe);
     
     this.listOfRecipesChanged();

     this.recipe = undefined;
   }

  deleteRecipe():void{

     this.listrecipes = this.listrecipes.filter(r => r !== this.recipe);
     this.recipeService.deleteRecipe(this.recipe).subscribe();
     this.listOfRecipesChanged();
     
     //this.messageService.add("Recipe " + this.recipe.name + " are deleted");

     this.recipe=undefined;
   }
   goBack():void{
     this.location.back();
   }
   addIngredient():void{
    if(!this.recipe)
      this.listOfIngredients.push(new Ingredient(''));
      else this.recipe.ingredients.push(new Ingredient(''));
   }
   removeIngredient(index,name:string){

     if(this.listOfIngredients.length>0)
     {
         this.listOfIngredients.splice(index, 1);
     }
     else 
     {
       this.recipe.ingredients.splice(index, 1);
      }
     let msg= 'Ingredient '+name+' are removed';
     this.messageService.add(msg);
   }
   onKey(text:string,item:Ingredient):void{
    item.name=text;
   }
}

