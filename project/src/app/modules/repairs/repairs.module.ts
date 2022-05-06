import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRepairsComponent } from './components/main-repairs/main-repairs.component';



@NgModule({
  declarations: [
    MainRepairsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainRepairsComponent
  ]
})
export class RepairsModule { }
