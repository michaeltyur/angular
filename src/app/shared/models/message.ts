export class Message
{
   message:string;
   type:string;
   isMessageShow:boolean;
   
   constructor(msg:string,type:string){
       this.message=msg;
       this.type=type;
       this.isMessageShow=false;
   }
}