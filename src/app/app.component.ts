import { Component } from '@angular/core';
import { FavoriteChangedType } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  description = '';
  isFavorite = true;

  onFavoriteChanged(isFav: FavoriteChangedType) {
    console.log('--onFavoriteChanged clicked:', isFav);
  }

  getEmailString() {
    let emailString = 'mailto:608839@bah.com';
    emailString += '?subject=Mail to the sender';
    return emailString;
  }
}
