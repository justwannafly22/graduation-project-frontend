import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { EmailInputComponent } from './email-input/email-input.component';
import { MatInputModule } from '@angular/material/input';
import { PasswordInputComponent } from './password-input/password-input.component';
import { TranslateModule } from '@ngx-translate/core';
import { DateComponent } from './date/date.component';
import { DescriptionComponent } from './description/description.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { MatSelectModule } from '@angular/material/select';
import { SizeInputComponent } from './size-input/size-input.component';
@NgModule({
  declarations: [
    EmailInputComponent,
    PasswordInputComponent,
    DateComponent,
    DescriptionComponent,
    MultiSelectComponent,
    SizeInputComponent,
  ],
  exports: [
    DateComponent,
    EmailInputComponent,
    PasswordInputComponent,
    DescriptionComponent,
    MultiSelectComponent,
    SizeInputComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    TranslateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class InputFieldsModule {}
