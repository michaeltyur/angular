import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { HoverDirective } from './directives/hover.directive';
import { SearchPipe } from './pipes/search.pipe';
import { TomarkPipe } from './pipes/tomark.pipe';
import { RecipeSearchService } from './services/recipe-search.service';
import { ShopitemService } from './services/shopitem.service';
import { RecipeService } from './services/recipe.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    ItemDetailsComponent,
    ShoplistComponent,
    MessagesComponent,
    RecipeSearchComponent,
    IngredientComponent,
    HoverDirective,
    SearchPipe,
    TomarkPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [
    RecipeSearchService,
    ShopitemService,
    RecipeService,
    MessageService
  ],
  bootstrap: [AppComponent] 
})
export class AppModule {

 }

