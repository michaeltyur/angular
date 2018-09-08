import { InMemoryDbService } from 'angular-in-memory-web-api';

import{Recipe} from './shared/models/recipe.model'
import{Ingredient} from './shared/models/ingredient.model'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 12, name: 'Palak Paneer Curry',description:"Palak paneer is an Indian curry with soft cubes of cheese simmered in a mildly spiced",ingredients:[new Ingredient('bacon'),new Ingredient('brandy')]},
      { id: 13, name: 'Spicy Garlic Lime Chicken',description:"A sweet and spicy marinated tenderloin, grilled to perfection", ingredients:[new Ingredient('courgette'), new Ingredient('garlic'), new Ingredient('cloves'), new Ingredient('crushed')]},
      { id: 14, name: 'Cherry Cream Cheese Dump Cake',description:"This dessert is amazing! It uses coffee and chocolate, the best combination since chocolate and peanut butter",ingredients:[{name :'onions'}, {name :'salt'}, {name :'pepper'}]},
      { id: 15, name: 'Waikiki-Style Meatballs',description:"Hatch chiles are New Mexico's gift to the world",ingredients:[ new Ingredient('crushed'),  new Ingredient('balsamic'), new Ingredient('vinegar')]},
      { id: 16, name: 'Wimbledon-inspired strawberry ice cream',description:"An easy and mega-quick summer pud",ingredients:[new Ingredient('frozen strawberries'), new Ingredient('natural fat-free yoghurt')]},
      { id: 17, name: 'Watermelon granita',description:"with ginger syrop, cool natural YOGHURT & MINT",ingredients:[new Ingredient('watermelon'),new Ingredient('stem'), new Ingredient('limes')]},
    ];
    return {recipes};
  }
  // createDb() {
  //   const recipes = [
  //     { id: 11, name: 'Nancys Baked Spaghetti Squash',description:"Spaghetti squash is baked in a rich tomato sauce and topped with cheese and bacon",ingredients:"sucar,sall,pilpel" },
  //     { id: 12, name: 'Palak Paneer Curry',description:"Palak paneer is an Indian curry with soft cubes of cheese simmered in a mildly spiced",ingredients:"bacon,brandy" },
  //     { id: 13, name: 'Spicy Garlic Lime Chicken',description:"A sweet and spicy marinated tenderloin, grilled to perfection",ingredients:"courgette,garlic cloves,crushed" },
  //     { id: 14, name: 'Cherry Cream Cheese Dump Cake',description:"This dessert is amazing! It uses coffee and chocolate, the best combination since chocolate and peanut butter",ingredients:"red onions,salt,pepper" },
  //     { id: 15, name: 'Waikiki-Style Meatballs',description:"Hatch chiles are New Mexico's gift to the world",ingredients:"crushed,balsamic vinegar" },
  //     { id: 16, name: 'Wimbledon-inspired strawberry ice cream',description:"An easy and mega-quick summer pud",ingredients:"frozen strawberries,natural fat-free yoghurt" },
  //     { id: 17, name: 'Watermelon granita',description:"WITH GINGER SYRUP, COOL NATURAL YOGHURT & MINT",ingredients:"watermelon,stem,limes" },
  //   ];
  //   return {recipes};
 // }
}