import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css'],
})
export class AuthRegisterComponent implements OnInit {
  public formGroup!: FormGroup;
  leftBtnAfter: boolean = true;
  displayCompany: boolean = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  public initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.max(100)],
      contactNumber: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }
  public toggle = (): void => {
    this.leftBtnAfter = false;
    this.displayCompany == false
      ? (this.displayCompany = true)
      : (this.displayCompany = false);
  };
  public submit() {
    this.formGroup.value.contactNumber = `+3${this.formGroup.value.contactNumber}`;
    console.log(this.formGroup.value);
  }
}
