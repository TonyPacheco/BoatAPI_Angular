import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { Alert } from '../../classes/alert';
import { AlertType } from 'src/app/enums/alert-type.enum';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private auth: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  public submit(): void {
    if (this.registerForm.valid) {
      // TODO call authservice
      const { firstName, lastName, email, password } = this.registerForm.value;

      this.subscriptions.push(
        this.auth
          .register(firstName, lastName, email, password)
          .subscribe(success => {
            if (success) {
              this.router.navigate(['/boats']);
            }
          })
      );
    } else {
      const failedRegisterAlert = new Alert(
        'Invalid name, email, and password',
        AlertType.Danger
      );
      this.alertService.alerts.next(failedRegisterAlert);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
