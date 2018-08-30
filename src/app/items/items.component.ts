import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import{RecipeService} from '../recipe.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items',
  template: `{{recipedetails}}`,
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']  
})
export class ItemsComponent implements OnInit {

  listrecipes:Recipe[];
  
  selectedRecipe : Recipe;

  constructor(private recipeService:RecipeService,private messageService: MessageService) { }
  ngOnInit() 
  {
    this.getRecipes();
  }
  getRecipes():void{
    this.messageService.add('RecipeService: fetched recipe');
    this.recipeService.getListRecipes()
    .subscribe(recipes=>this.listrecipes=recipes);
  }
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
 newRecipe():void{
  this.selectedRecipe=new Recipe("","","");
 }

}
