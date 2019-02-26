import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth: AuthService) {}

  public isAdmin: boolean = false;

  ngOnInit() {
    this.isAdmin = this.auth.isAdmin();
  }
  
  public logout() {
    this.auth.logout();
  }
}
