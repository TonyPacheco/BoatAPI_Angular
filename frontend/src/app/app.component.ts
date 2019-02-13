import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token: string;

  setToken = (token: string): void => {
    this.token = token;
  };

  isLoggedIn = (): boolean => {
    if (this.token) {
      return true;
    } else {
      return false;
    }
  };

  validateToken = (): boolean => {
    if (this.token) {
      return true;
    } else {
      return false;
    }
  };

  login = (event: any): void => {
    event.preventDefault();
    this.token = 'todo';
  };
}
