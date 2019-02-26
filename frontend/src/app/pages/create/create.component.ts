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
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public createForm: FormGroup;
  boatData: Boat = {
    boatId: -1,
    boatName: '',
    description: '',
    lengthInFeet: '',
    make: '',
    picture: ''
  };
  loggedIn: boolean;
  private httpHeaders: HttpHeaders;

  constructor(
    private http: HttpClient,
    private cdRef: ChangeDetectorRef,
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.generateForm();
  }

  @HostBinding('class.footer-fixer') footerFixer: boolean = false;

  ngOnInit() {
    this.footerFixer = true;
    this.cdRef.detectChanges();

    this.loggedIn = this.auth.loggedIn();

    if (this.loggedIn) {
      this.setHttpHeader();
    }
  }

  setHttpHeader() {
    this.httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + this.auth.getToken(),
      'Content-Type': 'application/json'
    });
  }

  private generateForm(): void {
    this.createForm = this.fb.group({
      boatName: [this.boatData.boatName, [Validators.required]],
      boatPicture: [this.boatData.picture, [Validators.required]],
      lengthInFeet: [this.boatData.lengthInFeet, [Validators.required]],
      make: [this.boatData.make, [Validators.required]],
      description: [this.boatData.description, [Validators.required]]
    });
    ``;
  }

  public submit(): boolean {
    if (this.createForm.valid) {
      const newBoat = {
        boatName: this.boatData.boatName,
        picture: this.boatData.picture,
        lengthInFeet: this.boatData.lengthInFeet,
        make: this.boatData.make,
        description: this.boatData.description
      };

      this.http
        .post<string>('https://boatapi.azurewebsites.net/api/boats/', newBoat, {
          headers: this.httpHeaders
        })
        .subscribe(res => {
          this.router.navigate(['/boats']);
          return true;
        });
    } else {
      return false;
    }
  }
}
