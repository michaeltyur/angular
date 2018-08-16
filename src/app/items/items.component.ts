import { Component, OnInit } from '@angular/core';
import {ListRecipe}  from '../shared/models/list.resipes';
import { Recipe } from '../shared/models/recipe.model';
import{ItemDetailsComponent} from'../item-details/item-details.component'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']  
})
export class ItemsComponent implements OnInit {

  listrecipes:Recipe[];
  name:string;
  description:string;
  recipedetails:Recipe;

  constructor() 
  { 
    this.listrecipes=new ListRecipe().list;
  }
  ngOnInit() {}
  setSelection=function($event){     
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            $event.currentTarget.className += " active";   
            localStorage.clear();
            let key = $event.currentTarget.getAttribute("id");

            let recipe=this.listrecipes.find(r=>r.name==key);

            var description=document.getElementById("description");
            description=this.recipedetails.description;
           // this.recipedetails.name=this.recipedetails.recipe.name;
           // this.recipedetails.description=this.recipedetails.recipe.description;
           // this.recipedetails.ingridients=this.recipedetails.recipe.ingridients;
      }

}
