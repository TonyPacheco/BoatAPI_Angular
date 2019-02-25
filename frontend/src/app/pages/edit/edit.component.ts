import {
  Component,
  OnInit,
  HostBinding,
  ChangeDetectorRef
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';

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
  private initialData: Object;
  private loggedIn: boolean;
  private id: string;

  constructor(
    private http: HttpClient,
    private cdRef: ChangeDetectorRef,
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute
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
      const httpHeaders = new HttpHeaders({
        Authorization: 'Bearer ' + this.auth.getToken()
      });

      this.http
        .get<Object>(`https://boatapi.azurewebsites.net/api/boats/${this.id}`, {
          headers: httpHeaders
        })
        .subscribe(res => {
          this.initialData = res;
          console.log(this.initialData);
        });
    }
  }

  private createForm(): void {
    this.editForm = this.fb.group({
      boatName: ['', [Validators.required]],
      boatPicture: ['', [Validators.required]],
      lengthInFeet: ['', [Validators.required]],
      make: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  public submit(): void {
    document.getElementById('description');

    // if (this.editForm.valid) {
    console.log(this.editForm.value);

    const {
      boatName,
      boatPicture,
      description,
      lengthInFeet,
      make
    } = this.editForm.value;
    // }
  }
}
