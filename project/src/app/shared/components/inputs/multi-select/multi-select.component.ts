import {
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ProductResponseInterface } from 'src/app/shared/interfaces/product/product-response.interface';


@Component({
  selector: 'app-multi-select-product',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponentProduct),
      multi: true,
    },
  ],
})
export class MultiSelectComponentProduct implements OnInit, ControlValueAccessor {
  @Input('spirit') spirit!: string;
  @Input() list!: any[] | any;
  @Input() allList?:
    | ProductResponseInterface[];
  control = new FormControl();
  onChange: any | any[];
  onTouch: any;
  writeValue(obj: any): void {
    this.control.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe((data) => {
      if (this.onChange) {
        this.onChange(data);
      }
    });
    console.log('+', this.list);
  }
}
