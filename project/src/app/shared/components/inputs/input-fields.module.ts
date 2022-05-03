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
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MaterialExampleModule } from '../../modules/material.module';
import { ContactNumberComponent } from './contact-number/contact-number.component';
@NgModule({
  declarations: [
    EmailInputComponent,
    PasswordInputComponent,
    DateComponent,
    DescriptionComponent,
    MultiSelectComponent,
    SizeInputComponent,
    ContactNumberComponent,
  ],
  exports: [
    DateComponent,
    EmailInputComponent,
    PasswordInputComponent,
    DescriptionComponent,
    MultiSelectComponent,
    SizeInputComponent,
    MaterialExampleModule,
    ContactNumberComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    TranslateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class InputFieldsModule {}
