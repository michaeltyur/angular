import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipes';
  cartCount:number;

  cartCountChange($event):void{
    this.cartCount=$event;
  }
}
