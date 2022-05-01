import { forwardRef, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MyErrorStateMatcher } from '../../../Validators/error-state-matcher';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true,
    },
  ],
})
export class EmailInputComponent implements OnInit, ControlValueAccessor {
  emailFormControl = new FormControl('', [
    Validators.email,
    Validators.required,
  ]);
  onChange: any;
  onTouch: any;
  constructor() {}
  writeValue(obj: any): void {
    this.emailFormControl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    this.emailFormControl.valueChanges.subscribe((data) => {
      if (this.onChange) {
        this.onChange(data);
      }
    });
  }
}
