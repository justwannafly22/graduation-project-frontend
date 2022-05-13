import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMastersComponent } from './components/main-masters/main-masters.component';
import { MastersService } from './services/masters.service';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { ChosenMasterComponent } from './components/chosen-master/chosen-master.component';
import { RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputFieldsModule } from 'src/app/shared/components/inputs/input-fields.module';



@NgModule({
  declarations: [
    MainMastersComponent,
    ChosenMasterComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    ReactiveFormsModule,
    InputFieldsModule

  ],
  providers:[MastersService],
  exports:[
    MainMastersComponent,
    ChosenMasterComponent
  ]
})
export class MastersModule { }
