import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import{ItemsComponent}from '../app/items/items.component'
import {ShoplistComponent} from '../app/shoplist/shoplist.component'
import {IngredientComponent} from '../app/ingredient/ingredient.component'

const routes:Routes=[
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path:'recipes',component:ItemsComponent },
    {path:'shopinglist',component:ShoplistComponent},
    {path:'ingredients',component:IngredientComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
