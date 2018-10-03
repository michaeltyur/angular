import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Location } from '@angular/common'

//services
import { RecipeService } from '../services/recipe.service';
import { MessageService } from '../services/message.service';

import { Recipe } from '../shared/models/recipe.model';
import { Ingredient } from '../shared/models/ingredient.model'
import { ItemsComponent } from '../items/items.component';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  @Input() listrecipes: Recipe[];

  @Input() listOfIngredients: Ingredient[];

  constructor(
    private recipeService: RecipeService,
    private location: Location,
    private messageService: MessageService) {

    this.listOfIngredients = [];
  }

  ngOnInit() { }


  updateRecipe(name: string, description: string, image: string): void {

    this.recipe.name = name;
    this.recipe.description = description;
    this.recipe.image = image;

    if (this.listOfIngredients.length > 0)//add ingredients array if not empty
      this.recipe.ingredients = this.listOfIngredients;

    this.recipeService.updateRecipe(this.recipe).subscribe();
      // (success) => {
      //   this.messageService.add("Recipe are updated", "alert-success");
      //   this.recipe = undefined;
      // },
      // (error) => {
      //   this.messageService.add("an error has occurred", "alert-warning");
      //   console.log(error);
      // });
  }

  addNewRecipe(name: string, description: string, image: string): void {

    if (!name && !description) {
      //send message to message area
      this.messageService.add("The fields cannot be empty", "alert-warning");
      console.log("The fields cannot be empty");
      return;
    }

    this.recipe = new Recipe(name, description, this.listOfIngredients, image);

    this.recipeService.addRecipe(this.recipe).subscribe(res=>this.listrecipes.push(res));

      // (success) => {
      //   this.messageService.add("Recipe are added", "alert-success");
      //   this.listrecipes.push(this.recipe);
      //   this.recipe = undefined;
      // },
      // (error) => {
      //   this.messageService.add("an error has occurred", "alert-warning");
      //   console.log(error);
      // });
  }

  deleteRecipe(): void {

    

    this.recipeService.deleteRecipe(this.recipe).subscribe(
      (success) => {
        this.listrecipes = this.listrecipes.filter(r => r !== this.recipe);
        this.recipe = undefined;
      },
      (error) => {});

  }

  goBack(): void {
    this.location.back();
  }

  addIngredient(): void {
    if (!this.recipe)
      this.listOfIngredients.push(new Ingredient(''));
    else this.recipe.ingredients.push(new Ingredient(''));
  }
  removeIngredient(index, name: string) {

    if (this.listOfIngredients.length > 0) {
      this.listOfIngredients.splice(index, 1);
    }
    else {
      this.recipe.ingredients.splice(index, 1);
    }
  }
  onKey(text: string, item: Ingredient): void {
    item.name = text;
  }
}

