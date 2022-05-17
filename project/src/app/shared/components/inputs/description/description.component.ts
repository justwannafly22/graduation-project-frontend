import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/Validators/error-state-matcher';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DescriptionComponent),
      multi: true,
    },
  ],
})
export class DescriptionComponent implements OnInit, ControlValueAccessor {
  @Input('dataType') dataType: string = 'text';
  @Input('spirit') spirit!: string;
  @Input('disablet') disablet!: string;
  descriptionFormControl = new FormControl('', [Validators.required]);
  onChange: any;
  onTouch: any;
  constructor() {}
  writeValue(obj: any): void {
    this.descriptionFormControl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
    this.descriptionFormControl.valueChanges.subscribe((data) => {
      if (this.onChange) {
        this.onChange(data);
      }
    });
  }
  matcher = new MyErrorStateMatcher();
}
