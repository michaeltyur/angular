import{Ingredient} from './ingredient.model'

export class ShopItem
{
    name:string;
    ingredient:Ingredient;
    amount:number;

    constructor(ingredient:Ingredient,amount)
    {
      this.ingredient=ingredient;
      this.amount=amount;
      this.name=ingredient.name;
    }
  }