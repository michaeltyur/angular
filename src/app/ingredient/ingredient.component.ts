import { Component, OnInit , EventEmitter} from '@angular/core';

import{IngredientService} from '../services/ingredient.service'
import{Ingredient} from '../shared/models/ingredient.model'

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredients:Ingredient[];

  selectedItem:Ingredient;

  constructor(private ingredientService:IngredientService) { }

  ngOnInit() {
    this.getAllIngredients();
  }

  getAllIngredients():void{
     this.ingredientService.getIngredients().then(res=>this.ingredients=res);
  }

  onSelected(item:Ingredient):void{
     this.selectedItem=item;
  }
}
