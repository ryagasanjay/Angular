import { Component } from '@angular/core';
import { CourseService } from '../courses.service';

@Component({
  selector: 'course',
  template:`<h2> {{'Title is :'+ title +'\n'+getTitle()}}</h2>
  <ul>
  <li *ngFor="let course of courses">
  {{course}}
  </li>
  </ul>

  <button class = "btn btn-primary" [class.active] = 'isActive'> Submit</button>

  <button [style.background]="isActive? 'blue' : 'white' "> Submit</button>
  
  <!-- <input [value] = "email" (keyup.enter)="email = $event.target.value; onKeyUp()" /> -->
  <input [(ngModel)] = "email" (keyup.enter)="onKeyUp()" />
  `, 
})
export class CourseComponent {

 title = 'List of Courses';
// courses = ['course1','course2'];
    courses;
    isActive = true;
email = "me@domain.com";

onKeyUp(){
  console.log(this.email);
}

getTitle(){
  return 'New list of courses';
}
  constructor(service: CourseService){ 
    this.courses = service.getCourses();
  }

}
