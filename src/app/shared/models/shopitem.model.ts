import{Ingredient} from './ingredient.model'

export class ShopItem
{
    id:number;
    name:string;
    ingredient:Ingredient;
    amount:number;
    isPurchased:boolean;

    constructor(ingredient:Ingredient,amount)
    {
      this.ingredient=ingredient;
      this.amount=amount;
      this.name=ingredient.name;
      this.isPurchased=false;
    }
  }