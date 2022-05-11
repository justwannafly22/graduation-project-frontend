import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMastersComponent } from './components/main-masters/main-masters.component';
import { MastersService } from './services/masters.service';
import { TableModule } from 'src/app/shared/components/table/table.module';



@NgModule({
  declarations: [
    MainMastersComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  providers:[MastersService],
  exports:[
    MainMastersComponent
  ]
})
export class MastersModule { }
