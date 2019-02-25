import {
  Component,
  OnInit,
  HostBinding,
  ChangeDetectorRef
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styles: [
    `
      :host(.footer-fixer) {
        height: 100% !important;
        -ms-flex-direction: column !important;
        flex-direction: column !important;
        display: -ms-flexbox !important;
        display: flex !important;
      }
    `
  ]
})
export class BoatsComponent implements OnInit {
  boats: object;
  loggedIn: boolean;
  constructor(
    private http: HttpClient,
    private cdRef: ChangeDetectorRef,
    private auth: AuthService
  ) {}

  @HostBinding('class.footer-fixer') footerFixer: boolean = false;

  ngOnInit(): void {
    this.footerFixer = true;
    this.cdRef.detectChanges();

    this.loggedIn = this.auth.loggedIn();

    if (this.loggedIn) {
      const httpHeaders = new HttpHeaders({
        Authorization: 'Bearer ' + this.auth.getToken()
      });

      this.http
        .get<Object>('https://boatapi.azurewebsites.net/api/boats', {
          headers: httpHeaders
        })
        .subscribe(res => {
          this.boats = res;
        });
    }
  }
}
