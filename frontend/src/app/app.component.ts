import { Component } from '@angular/core';
import users from './users';
import boats from './boats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  users = users;
  boats = boats;
}
