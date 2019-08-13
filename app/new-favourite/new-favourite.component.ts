import { Component } from '@angular/core';

@Component({
  selector: 'new-favourite',
  templateUrl: './new-favourite.component.html',
  styleUrls: ['./new-favourite.component.css']
})
export class NewFavouriteComponent {

  isFavourite: boolean;
   onToggle(){
      this.isFavourite = !this.isFavourite;
 }
}
