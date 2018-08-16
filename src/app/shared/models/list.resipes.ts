import{Recipe} from './recipe.model';

export class ListRecipe
{
 list: Array<Recipe>;
 constructor()
 {
     this.list=[
         new Recipe("Hara","Some hara","hara hara hara"),
         new Recipe("Dermo","Some dermo","dermo dermo dermo"),
         new Recipe("Mocha","Some mocha","mocha mocha mocha")
     ]
  } 
}