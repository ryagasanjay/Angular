import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-world';

  post = {
    isFavourite : true
  }

  onFavouriteChanged(isFavourite){
    console.log("favourite has changed" , isFavourite);
  }

   newCourses = [
     {id:1,name:'course1'},
     {id:1,name:'course2'},
     {id:1,name:'course3'},
   ];

   onAdd(){
     this.newCourses.push({id:4,name:'course4'});
   }

   onRemove(course){
     let index = this.newCourses.indexOf(course);
    this.newCourses.splice(index,1);
  }
  }
