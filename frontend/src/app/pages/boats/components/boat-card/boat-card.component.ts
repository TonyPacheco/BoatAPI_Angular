import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boat-card',
  templateUrl: './boat-card.component.html',
  styleUrls: ['./boat-card.component.css'],
  inputs: ['boat']
})
export class BoatCardComponent implements OnInit {

  constructor(private auth: AuthService, private http: HttpClient) { }

  ngOnInit() {
  }

  public delete(id): void {
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken()
    });

    this.http.delete<Object>('https://boatapi.azurewebsites.net/api/boats/' + id, { headers: httpHeaders }).subscribe(res => {
      location.reload();
    });
    
  }

}
