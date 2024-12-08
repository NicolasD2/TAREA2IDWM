import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = '';
  message: string = '';
  isSending: boolean = false;
  messageSent: boolean = false;

  onSubmit(event: Event):void{
    event.preventDefault();
    this.isSending = true;
    setTimeout(()=>{
      this.isSending = false;
      this.messageSent = true;
      this.email = '';
      this.message= '';
    },2000);
  }
  onInputEmail(event:Event):void{
    const target = event.target as HTMLInputElement;
    if(target){
      this.email = target.value;
    }

  }
  onInputMessage(event: Event):void{
    const target = event.target as HTMLTextAreaElement;
    if(target){
      this.message = target.value;
    }
  }
}


