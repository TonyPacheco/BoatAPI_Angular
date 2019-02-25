import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  @HostBinding('class.footer-fixer') footerFixer: boolean = false;

  ngOnInit() {
    this.footerFixer = true;
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
