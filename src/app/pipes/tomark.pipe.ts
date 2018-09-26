import{Pipe, PipeTransform,Component} from '@angular/core'
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Pipe({
    name:'tomark'
})

export class TomarkPipe implements PipeTransform
{
    constructor(private sanitizer: DomSanitizer){}
    transform(value: any, args: any): any {
        if (!args) {
          return value;
        }
        // Match in a case insensitive maneer
        const re = new RegExp(args, 'gi');
        const match = value.match(re);
    
        // If there's no match, just return the original value.
        if (!match) {
          return value;
        }
    
         value = value.replace(re, "<mark style='background:#ffc107;padding:0;'>" + match[0] + "</mark>");
         return this.sanitizer.bypassSecurityTrustHtml(value);
      }
}