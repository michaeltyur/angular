import { Injectable,EventEmitter } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { Observable, of } from 'rxjs';

import { Message} from '../shared/models/message';

 
@Injectable({
  providedIn: 'root',
})
export class MessageService {

  message:Message;

  alertMsgEmitter$ = new EventEmitter();

 constructor(private sanitizer: DomSanitizer){}

 
  add(message: string, alert: string) 
  {
     this.message=new Message(message,alert);
     this.alertMsgEmitter$.emit(this.message);
  }
  // async sendToLessener()
  // {
  //   await setTimeout(() => {      
  //     let tmpMsg=this.message;
  //   }, 1000);
      
  // }

}