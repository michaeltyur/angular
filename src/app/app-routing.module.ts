import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import{ItemsComponent}from '../app/items/items.component'
import {ShoplistComponent} from '../app/shoplist/shoplist.component'

const routes:Routes=[
    { path:'recipes',component:ItemsComponent },
    {path:'shopinglist',component:ShoplistComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
