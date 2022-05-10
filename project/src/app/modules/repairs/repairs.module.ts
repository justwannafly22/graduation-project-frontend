import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRepairsComponent } from './components/main-repairs/main-repairs.component';
import { RepairsService } from './services/repairs.service';



@NgModule({
  declarations: [
    MainRepairsComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[RepairsService],
  exports:[
    MainRepairsComponent
  ]
})
export class RepairsModule { }
