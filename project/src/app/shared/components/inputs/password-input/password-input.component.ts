import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/Validators/error-state-matcher';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PasswordInputComponent),
    },
  ],
})
export class PasswordInputComponent implements OnInit, ControlValueAccessor {
  passwordFormControl = new FormControl('', [Validators.required]);
  onChange: any;
  onTouch: any;
  constructor() {}
  writeValue(obj: any): void {
    this.passwordFormControl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    this.passwordFormControl.valueChanges.subscribe((data) => {
      if (this.onChange) {
        this.onChange(data);
      }
    });
  }
}
