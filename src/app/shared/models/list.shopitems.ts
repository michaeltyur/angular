import{ShopItem} from './shopitem.model';
import{Ingredient} from './ingredient.model'

export const ListShopItems:ShopItem[]=[
      new ShopItem(new Ingredient('Apple'),12),
      new ShopItem(new Ingredient('Lemon'),7),
      new ShopItem(new Ingredient('Pesh'),3),
      new ShopItem(new Ingredient('Salt'),2),
      new ShopItem(new Ingredient('Sugar'),10),
 ];

// export const ListShopItems:ShopItem[]=[
//    {ingredient:{ new Ingredient ("Apple")}, amount:12},
//    {ingredient:{name:"Lemon"},amount:7},
//    {ingredient:{name:"Pesh"},amount:3}
// ];