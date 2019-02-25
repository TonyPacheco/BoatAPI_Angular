import {
  Component,
  OnInit,
  HostBinding,
  ChangeDetectorRef
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { Boat } from '../../classes/boat';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
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
export class EditComponent implements OnInit {
  public editForm: FormGroup;
  private boatData: Boat = {
    boatId: '',
    boatName: '',
    description: '',
    lengthInFeet: '',
    make: '',
    picture: ''
  };
  private loggedIn: boolean;
  private id: string;
  private httpHeaders: HttpHeaders;

  constructor(
    private http: HttpClient,
    private cdRef: ChangeDetectorRef,
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  @HostBinding('class.footer-fixer') footerFixer: boolean = false;

  ngOnInit() {
    this.footerFixer = true;
    this.cdRef.detectChanges();
    this.id = this.route.snapshot.paramMap.get('id');

    this.loggedIn = this.auth.loggedIn();

    if (this.loggedIn) {
      this.setHttpHeader();
      this.loadData();
    }
  }

  setHttpHeader() {
    this.httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + this.auth.getToken()
    });
  }

  loadData() {
    this.http
      .get<Object>(`https://boatapi.azurewebsites.net/api/boats/${this.id}`, {
        headers: this.httpHeaders
      })
      .subscribe(res => {
        this.boatData = <Boat>res;
      });
  }

  private createForm(): void {
    this.editForm = this.fb.group({
      boatName: [this.boatData.boatName, [Validators.required]],
      boatPicture: [this.boatData.picture, [Validators.required]],
      lengthInFeet: [this.boatData.lengthInFeet, [Validators.required]],
      make: [this.boatData.make, [Validators.required]],
      description: [this.boatData.description, [Validators.required]]
    });
  }

  public submit(): boolean {
    if (this.editForm.valid) {
      this.http
        .put<string>(
          `https://boatapi.azurewebsites.net/api/boats/${this.id}`,
          this.boatData,
          { headers: this.httpHeaders }
        )
        .subscribe(res => {
          this.router.navigate(['/boats']);
          return true;
        });
    } else {
      return false;
    }
  }
}
