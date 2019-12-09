import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Output() change = new EventEmitter();

  buttonLabel = 'T';

  constructor() { }

  ngOnInit() {
  }

  onClickFavorite() {
    this.isFavorite = !this.isFavorite;
    this.buttonLabel = this.isFavorite ? 'T' : 'F';
    this.change.emit({newValue: this.isFavorite});
  }
}

export interface FavoriteChangedType {
  newValue: boolean;
}
