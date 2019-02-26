import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Alert } from 'src/app/classes/alert';
import { AlertType } from 'src/app/enums/alert-type.enum';
import { AlertService } from 'src/app/services/alert.service';
import { User } from 'src/app/classes/user';

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
    password: string,
    country: string,
    mobileNumber: string
  ): Observable<boolean> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.http
      .post<string>(
        'https://boatapi.azurewebsites.net/register',
        {
          Email: email,
          Password: password,
          First: firstName,
          Last: lastName,
          Country: country,
          Phone: mobileNumber
        },
        { headers: httpHeaders }
      )
      .subscribe(res => {
        return of(true);
      });
    return of(false);
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
        var jsonRes = JSON.parse(JSON.stringify(res));
        var token: string = jsonRes.token;
        var role: string = jsonRes.role[0];
        localStorage.setItem('token', token);
        localStorage.setItem('userType', role);
        this.router.navigate(['/boats']);
        return of(true);
      });
    return of(false);
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.router.navigate(['/login']);
    this.alertService.alerts.next(new Alert('Signed out.', AlertType.Success));
  }

  public loggedIn(): boolean {
    return this.getToken() != null;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAdmin(): boolean {
    // 1 if admin - 2 if member
    return localStorage.getItem('userType') == 'Admin';
  }
}
