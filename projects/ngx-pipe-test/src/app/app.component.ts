import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date();
  text = 'This <span class="text">text</span> is long enough'
    + ' to help us make an idea of how this text will get highlighted each time the word text occurs.';
}
