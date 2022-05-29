import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRepairsComponent } from './components/main-repairs/main-repairs.component';
import { RepairsService } from './services/repairs.service';
import { ChosenRepComponent } from './components/chosen-rep/chosen-rep.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputFieldsModule } from 'src/app/shared/components/inputs/input-fields.module';
import { TableModule } from 'src/app/shared/components/table/table.module';



@NgModule({
  declarations: [
    MainRepairsComponent,
    ChosenRepComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    ReactiveFormsModule,
    InputFieldsModule
  ],
  providers:[RepairsService],
  exports:[
    MainRepairsComponent
  ]
})
export class RepairsModule { }
