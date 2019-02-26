import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(private auth: AuthService) {}

  loggedIn: boolean;
  isAdmin: boolean = false;

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn();
    this.isAdmin = this.auth.isAdmin();
  }

  public logout() {
    this.auth.logout();
  }
}
