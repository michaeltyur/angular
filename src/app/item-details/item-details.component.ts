import { Component, OnInit } from '@angular/core';
import{Recipe} from'../shared/models/recipe.model'


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  public recipe:Recipe;
  
  constructor() 
  {
    this.recipe=new Recipe('','','');
  }
   ngOnInit() {}
   
}

