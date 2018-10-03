import { Component, OnInit, Input } from '@angular/core';
import { error } from 'util';

import { ShopitemService } from '../services/shopitem.service';
import { IngredientService } from '../services/ingredient.service';
import { RecipeService } from '../services/recipe.service';
import { MessageService } from '../services/message.service';

import { Message } from '../shared/models/message';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  current: string;

  shopListCount: number = 0;
  recipesCount: number = 0;
  ingredientsCount: number = 0;

  messages: Message[] = [];

  isMessageShow: boolean;

  constructor(private shopItemService: ShopitemService,
    private ingredientService: IngredientService,
    private recipeService: RecipeService,
    private messageService: MessageService) {

    this.current = "Recipes";

    recipeService.itemsCounterEmitter$.subscribe(count => this.recipesCount = count);
    shopItemService.countChanged$.subscribe(count => this.shopListCount = count);
    ingredientService.itemsCounterEmitter$.subscribe(count => this.ingredientsCount = count);
    messageService.alertMsgEmitter$.subscribe(res => {
      this.messages.push(res);
      // this.isMessageShow=true;
      this.messagesAction();
    });

  }

  ngOnInit() { }

  onSelect(selected: string): void {

    this.current = selected;

  }
  messageHideShow(): void {
    setTimeout(() => { this.isMessageShow = false; }, 3000);
  }
  async messagesAction() {

      for (let index = 0; index < this.messages.length; index++) {

      const msg = this.messages[index];
      
      if(msg && !msg.isMessageShow){
        setTimeout(()=>
        {
          msg.isMessageShow = true;
          setTimeout(()=>{
                            msg.isMessageShow = true;
                            this.messages.splice(index,1);
                          },3000);
        },1000*index);
      }

      }
    
    // await this.messages.forEach(function (msg, index) {
      
    //   setTimeout( () =>{
    //     if(msg&&msg.isMessageShow )
    //     {
    //       msg.isMessageShow = true;
          
    //       setTimeout(() => {
    //         msg.isMessageShow = true;
    //         //debugger;                                      
    //         msg=undefined;        
    //       }, 3000);
          
    //     }
    //   }, index * 1000);
    // });
    // this.messages=this.messages.filter(msg=>msg.isMessageShow);
   //this.messages=[];
  }
  filterArray():void{
    this.messages=this.messages.filter(msg=>msg);
  }
}
