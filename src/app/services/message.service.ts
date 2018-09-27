import { Injectable,EventEmitter } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

 
@Injectable({
  providedIn: 'root',
})
export class MessageService {
constructor(private sanitizer: DomSanitizer){

}
  message:string;
  alertMsgEmitter$ = new EventEmitter();
 
  add(message: string, alert: string) 
  {
    
    this.message=`<div class="alert ${alert}" style="padding-top:5px;padding-bottom:5px;margin-top:0;margin-bottom:0"> ${message} </div>`;
    this.alertMsgEmitter$.emit(this.sanitizer.bypassSecurityTrustHtml(this.message));
  }
 
  clear() {
    this.message = "";
  }
}