import { InMemoryDbService } from 'angular-in-memory-web-api';

import{Recipe} from '../shared/models/recipe.model'
import{Ingredient} from '../shared/models/ingredient.model'
import {ShopItem} from '../shared/models/shopitem.model'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ingredients=[
      {
        id:1,
        name:"sugar",
        description:""
      },
      {
        id:2,
        name:"salt",
        description:""
      },
      {
        id:3,
        name:"crushed",
        description:""
      }
    ]
    const recipes = [
      { id: 12, name: 'Palak Paneer Curry',description:"Palak paneer is an Indian curry with soft cubes of cheese simmered in a mildly spiced",ingredients:[new Ingredient('bacon'),new Ingredient('brandy')]},
      { id: 13, name: 'Spicy Garlic Lime Chicken',description:"A sweet and spicy marinated tenderloin, grilled to perfection", ingredients:[new Ingredient('courgette'), new Ingredient('garlic'), new Ingredient('cloves'), new Ingredient('crushed')]},
      { id: 14, name: 'Cherry Cream Cheese Dump Cake',description:"This dessert is amazing! It uses coffee and chocolate, the best combination since chocolate and peanut butter",ingredients:[{name :'onions'}, {name :'salt'}, {name :'pepper'}]},
      { id: 15, name: 'Waikiki-Style Meatballs',description:"Hatch chiles are New Mexico's gift to the world",ingredients:[ new Ingredient('crushed'),  new Ingredient('balsamic'), new Ingredient('vinegar')]},
      { id: 16, name: 'Wimbledon-inspired strawberry ice cream',description:"An easy and mega-quick summer pud",ingredients:[new Ingredient('frozen strawberries'), new Ingredient('natural fat-free yoghurt')]},
      { id: 17, name: 'Watermelon granita',description:"with ginger syrop, cool natural YOGHURT & MINT",ingredients:[new Ingredient('watermelon'),new Ingredient('stem'), new Ingredient('limes')]},
    ];
    const shopitems=[
       { 
         id:1,
         name:"sugar",
         description:"",
         amount:3,
         isPurchased:false,
         ingredient:ingredients.find(i=>i.name=='sugar')
       },
       { 
        id:2,
        name:"salt",
        description:"",
        amount:2,
        isPurchased:false,
        ingredient:ingredients.find(i=>i.name=='salt')
      }
      ];

     return { recipes, shopitems,ingredients };
  }
}