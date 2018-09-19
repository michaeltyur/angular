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
      { 
         id: 12,
         name: 'Palak Paneer Curry',
         description:"Palak paneer is an Indian curry with soft cubes of cheese simmered in a mildly spiced",
         image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2013/03/palak-paneer-recipe-016.jpg",
         ingredients:[new Ingredient('bacon'),new Ingredient('brandy')]},
      { 
        id: 13, 
        name: 'Spicy Garlic Lime Chicken',
        description:"A sweet and spicy marinated tenderloin, grilled to perfection",
        image:"https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/spicy-garlic-lime-chicken_28331.jpg",
        ingredients:[new Ingredient('courgette'), new Ingredient('garlic'), new Ingredient('cloves'), new Ingredient('crushed')]},
      { 
        id: 14, 
        name: 'Cherry Cream Cheese Dump Cake',
        description:"This dessert is amazing! It uses coffee and chocolate, the best combination since chocolate and peanut butter",
        image:"https://i.pinimg.com/originals/52/7c/81/527c81b162c79afeeca3f66db4ee63a8.jpg",
        ingredients:[{name :'onions'}, {name :'salt'}, {name :'pepper'}]},
      { 
        id: 15, 
        name: 'Waikiki Style Meatballs',
        description:"Hatch chiles are New Mexico's gift to the world",
        image:"https://images.media-allrecipes.com/userphotos/560x315/274488.jpg",
        ingredients:[ new Ingredient('crushed'),  new Ingredient('balsamic'), new Ingredient('vinegar')]},
      { id: 16, 
        name: 'Wimbledon inspired strawberry ice cream',
        description:"An easy and mega-quick summer pud",
        image:"http://www.themetropolist.com/wp-content/uploads/2016/06/OXBO-Bankside1.jpg",
        ingredients:[new Ingredient('frozen strawberries'), new Ingredient('natural fat-free yoghurt')]},
      { id: 17,
         name: 'Watermelon granita',
         description:"with ginger syrop, cool natural YOGHURT & MINT",
         image:"http://www.aicr.org/health-e-recipes/images/watermelon-granita.jpg",
         ingredients:[new Ingredient('watermelon'),new Ingredient('stem'), new Ingredient('limes')]},
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