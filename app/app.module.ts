import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { EventComponentComponent } from './event-component/event-component.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { NewFavouriteComponent } from './new-favourite/new-favourite.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InputValidationsComponent } from './input-validations/input-validations.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    EventComponentComponent,
    FavouriteComponent,
    NewFavouriteComponent,
    ContactFormComponent,
    InputValidationsComponent,
    AssignmentFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
