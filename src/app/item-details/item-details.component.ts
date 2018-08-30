import { Component, OnInit,Input } from '@angular/core';
import{Location} from '@angular/common'
 
import{Recipe} from'../shared/models/recipe.model';
import{RecipeService} from '../recipe.service';
import { MessageService } from '../message.service';




@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() recipe:Recipe;
  listrecipes:Recipe[];

  constructor(
              private recipeService:RecipeService,
              private location:Location,
              private messageService: MessageService
            ) {
  }
  ngOnInit() 
  {
    this.getRecipes();
  }
  getRecipes():void{
    this.recipeService.getListRecipes()
    .subscribe(recipes=>this.listrecipes=recipes);
  }
  
   updateRecipe(name:string, description:string,ingredients:string):void{
     
     this.messageService.add("Recipe "+this.recipe.name+" are updated");

    this.recipe.name=name;
    this.recipe.description=description;
    this.recipe.ingredients=ingredients;

    this.recipeService.updateRecipe(this.recipe);

   }
   save(): void {
    this.recipeService.updateRecipe(this.recipe)
      .subscribe(() => this.goBack());
  }
   addNewRecipe():void{
     this.listrecipes.push(this.recipe);
   }
   goBack():void{
     this.location.back();
   }

}

