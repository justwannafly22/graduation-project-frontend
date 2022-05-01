import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/Validators/error-state-matcher';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true,
    },
  ],
})
export class DateComponent implements OnInit, ControlValueAccessor {
  @Input('spirit') spirit!: string;
  dataPickFormControl = new FormControl('', [Validators.required]);
  onChange: any;
  onTouch: any;
  constructor() {}
  writeValue(obj: any): void {
    this.dataPickFormControl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.dataPickFormControl.valueChanges.subscribe((data) => {
      if (this.onChange) {
        this.onChange(data);
      }
    });
  }
}
