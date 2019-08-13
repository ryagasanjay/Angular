import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assform',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent  {

  log(course){
    console.log(course);
  }

  categories = [
    {'id':1,'name':"email"},
    {'id':2,'name':"Fax"},
    {'id':3,'name':"Mobile"},
  ]
}
