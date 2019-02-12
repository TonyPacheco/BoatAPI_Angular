import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: object;
  boats: object;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/boats.json').subscribe(res => {
      this.boats = res;
    });

    this.http.get<Object>('../assets/users.json').subscribe(res => {
      this.users = res;
    });
  }
}
