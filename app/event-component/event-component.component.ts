import { Component } from '@angular/core';

@Component({
  selector: 'event',
  template: `
  
  <button (click) = "onSave($event)"> Save</button>

  <input [(ngModel)] = "email" (keyup.enter)= "onKeyUp()"/>

  <p><a href="#" class ="glyphicon glyphicon-star-empty"></a></p>
  <i class="fa fa-check" aria-hidden="true"></i>'
 <!-- <i class="fa " [class.fa-star] = "isActive"  [class.fa-star-o] = "!isActive"(click)="toggleFalse()"> </i> -->
  `,
})
export class EventComponentComponent  {

  email = "me@example.com";
  isActive = true;

  toggleFalse(){
    this.isActive = !this.isActive;
  }
  onSave($event){
    console.log("buton is clicked", $event);
  }
  onKeyUp(){
    console.log(this.email);
  }

}
