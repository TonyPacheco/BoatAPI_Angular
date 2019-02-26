import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth: AuthService) {}

  private loggedIn: boolean;
  private isAdmin: boolean = false;

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn();
    this.isAdmin = this.auth.isAdmin();
  }
  
  public logout() {
    this.auth.logout();
  }
}
