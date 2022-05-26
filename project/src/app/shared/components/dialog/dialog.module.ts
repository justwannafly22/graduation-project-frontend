import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { InputFieldsModule } from '../inputs/input-fields.module';
import { DialogVirtualCvComponent } from './dialog-virtual-cv/dialog-virtual-cv.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DialogForMaster } from './dialog-virtual-cv-for-master/dialog-master.component';

@NgModule({
  declarations: [DialogVirtualCvComponent,DialogForMaster],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatProgressBarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    TranslateModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    InputFieldsModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ],
  exports: [DialogVirtualCvComponent],
})
export class DilaogModule {
  constructor() {}
}
