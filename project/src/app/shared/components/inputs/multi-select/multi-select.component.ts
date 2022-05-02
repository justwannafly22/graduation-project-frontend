import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
// import { BasicResponseInterface } from 'src/app/shared/interfaces/basic/basic-response.interface';
// import { LanguagesResponseInterface } from 'src/app/shared/interfaces/languages/languages-response.interface';
// import { ProjectResponseInterface } from 'src/app/shared/interfaces/projects/project-response.interface';
// import { SkillsResponseInterface } from 'src/app/shared/interfaces/skills/skills-response.interface';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true,
    },
  ],
})
export class MultiSelectComponent implements OnInit, ControlValueAccessor {
  @Input('multiple') multiple: boolean = true;
  @Input('spirit') spirit!: string;
  @Input() list!: any[] | any;
  //
  allList?: any[];
  // @Input() allList?:
  //   | BasicResponseInterface[]
  //   | SkillsResponseInterface[]
  //   | LanguagesResponseInterface[]
  //   | ProjectResponseInterface[];
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
