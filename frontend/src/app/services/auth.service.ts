import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Alert } from '../classes/alert';
import { AlertType } from '../enums/alert-type.enum';
import { AlertService } from '../services/alert.service';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Observable<User | null>;
  public token: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService
  ) {
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
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http
      .post<string>(
        'https://boatapi.azurewebsites.net/login',
        {
          Username: email,
          Password: password
        },
        { headers: httpHeaders }
      )
      .subscribe(res => {
        console.log(res);
        return res.token;
      });
  }

  public logout(): void {
    // TODO Talk to backend
    this.router.navigate(['/login']);
    this.alertService.alerts.next(new Alert('Signed out.', AlertType.Success));
  }
}
