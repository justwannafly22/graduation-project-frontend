import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginComponent implements OnInit {
  loginFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  public initializeForm(): void {
    console.log('qwe');
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.maxLength(20)],
    });
  }
  public submit() {
    console.log(this.loginFormGroup?.value);
  }
}
