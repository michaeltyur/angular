
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { NewShoppingItemComponent } from './new-shopping-item/new-shopping-item.component';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
//import { LocalStorageModule } from '@ngx-pwa/local-storage';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    ItemsComponent,
    ItemDetailsComponent,
    NewShoppingItemComponent,
    ShoppingItemsComponent
  ],
  imports: [
    BrowserModule
    //LocalStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

