import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'validations',
  templateUrl: './input-validations.component.html',
  styleUrls: ['./input-validations.component.css']
})
export class InputValidationsComponent {

  log(firstname){
    console.log(firstname);
  }
submit(f){
  console.log(f.value);
}
contactMethods = [
  {id:1,name:'Email'},
  {id:2,name:'Mobile'},
  {id:3,name:'Fax'},
]
}
