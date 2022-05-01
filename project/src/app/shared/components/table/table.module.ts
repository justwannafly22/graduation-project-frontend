import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsRoutingModule } from 'src/app/modules/projects/projects-routing.module';
import { InputFieldsModule } from '../inputs/input-fields.module';
import { TableComponent } from './table/table.component';
import { MatInputModule } from '@angular/material/input';
import { CvModule } from 'src/app/modules/cv/cv.module';

@NgModule({
  declarations: [TableComponent],
  providers: [],
  imports: [
    MatTableModule,
    CommonModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatInputModule,
    ProjectsRoutingModule,
    //CvModule,
    TranslateModule,
    MatButtonModule,
    MatFormFieldModule,
    InputFieldsModule,
    MatNativeDateModule,
    MatPaginatorModule,
  ],
  exports: [TableComponent],
})
export class TableModule {
  constructor() {}
}
