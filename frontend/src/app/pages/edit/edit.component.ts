import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm(): void {
    this.editForm = this.fb.group({
      boatName: ['', [Validators.required]],
      boatPicture: ['', [Validators.required]],
      lengthInFeet: ['', [Validators.required]],
      make: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }
}
