import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Alert } from '../classes/alert';
import { AlertType } from '../enums/alert-type.enum';
import { AlertService } from '../services/alert.service';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Observable<User | null>;

  constructor(private router: Router, private alertService: AlertService) {
    // TODO Fetch user from the backend
    this.currentUser = of(null);
  }

  public register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Observable<boolean> {
    // TODO Talk to backend
    return of(true);
  }

  public login(email: string, password: string): Observable<boolean> {
    // TODO Talk to backend
    return of(true);
  }

  public logout(): void {
    // TODO Talk to backend
    this.router.navigate(['/login']);
    this.alertService.alerts.next(new Alert('Signed out.', AlertType.Success));
  }
}
