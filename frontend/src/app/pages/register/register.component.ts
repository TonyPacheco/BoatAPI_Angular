import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert } from '../../classes/alert';
import { AlertType } from 'src/app/enums/alert-type.enum';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private fb: FormBuilder, private alertService: AlertService) {
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
    } else {
      const failedRegisterAlert = new Alert(
        'Invalid name, email, and password',
        AlertType.Danger
      );
      this.alertService.alerts.next(failedRegisterAlert);
    }
  }
}
