import{ShopItem} from './shopitem.model';
import{Ingredient} from './ingredient.model'

export const ListShopItems:ShopItem[]=[
      new ShopItem(new Ingredient('apple'),12),
      new ShopItem(new Ingredient('lemon'),7),
      new ShopItem(new Ingredient('pesh'),3),
      new ShopItem(new Ingredient('salt'),2),
      new ShopItem(new Ingredient('sugar'),10),
 ];

// export const ListShopItems:ShopItem[]=[
//    {ingredient:{ new Ingredient ("Apple")}, amount:12},
//    {ingredient:{name:"Lemon"},amount:7},
//    {ingredient:{name:"Pesh"},amount:3}
// ];