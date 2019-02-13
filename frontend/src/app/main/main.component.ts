import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: object;
  boats: object;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Object>('../assets/boats.json').subscribe(res => {
      this.boats = res;
    });
  }
}
