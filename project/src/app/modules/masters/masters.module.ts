import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMastersComponent } from './components/main-masters/main-masters.component';
import { MastersService } from './services/masters.service';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { ChosenMasterComponent } from './components/chosen-master/chosen-master.component';
import { RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputFieldsModule } from 'src/app/shared/components/inputs/input-fields.module';
import { MasterAddComponent } from './components/master-add/master-add.component';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    MainMastersComponent,
    ChosenMasterComponent,
    MasterAddComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    ReactiveFormsModule,
    InputFieldsModule,
    //AuthModule

  ],
  providers:[MastersService],
  exports:[
    MainMastersComponent,
    ChosenMasterComponent,
    MasterAddComponent
  ]
})
export class MastersModule { }
