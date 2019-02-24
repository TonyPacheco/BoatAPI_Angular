import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {
  boats: object;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Object>('../assets/boats.json').subscribe(res => {
      this.boats = res;
    });
  }
}
