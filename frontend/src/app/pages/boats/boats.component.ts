import {
  Component,
  OnInit,
  HostBinding,
  ChangeDetectorRef
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) {}

  @HostBinding('class.footer-fixer') footerFixer: boolean = false;

  ngOnInit(): void {
    this.footerFixer = true;
    this.cdRef.detectChanges();

    this.http.get<Object>('../assets/boats.json').subscribe(res => {
      this.boats = res;
    });
  }
}
