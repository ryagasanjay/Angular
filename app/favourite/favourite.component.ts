import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // @Input('isFavourite') isSelected : boolean;
  // @Output() change = new EventEmitter();
  isSelected : boolean;
  toggleStar(){
    this.isSelected = !this.isSelected;
   // this.change.emit(this.isSelected);
  }






}
