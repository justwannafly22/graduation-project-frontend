import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMastersComponent } from './components/main-masters/main-masters.component';



@NgModule({
  declarations: [
    MainMastersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainMastersComponent
  ]
})
export class MastersModule { }
