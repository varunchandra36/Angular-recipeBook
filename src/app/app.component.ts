import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feature= 'recipe';
  title = 'app';
  onNavigated(selected: string) {
    console.log(selected);
    this.feature = selected;
  }
}
