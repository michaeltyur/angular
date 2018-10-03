import { Component, OnInit , EventEmitter} from '@angular/core';

import{IngredientService} from '../services/ingredient.service'
import{MessageService} from '../services/message.service'

import{Ingredient} from '../shared/models/ingredient.model'

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredients:Ingredient[];

  selectedItem:Ingredient;

  constructor(private  ingredientService:IngredientService,
               private messageService: MessageService) { }

  ngOnInit() {
    this.getAllIngredients();
  }

  getAllIngredients():void{
     this.ingredientService.getIngredients().then(res=>this.ingredients=res);
  }
  removeItem(item:Ingredient):void{
    this.ingredientService.deleteIngredient(item).then(
      ()=>{this.messageService.add("The Ingredient is aded","alert-succes")},
      (rejected)=>{}
    ).catch(error=>console.error(error));
    
  }
  onSelected(item:Ingredient):void{
     this.selectedItem=item;
  }

}
