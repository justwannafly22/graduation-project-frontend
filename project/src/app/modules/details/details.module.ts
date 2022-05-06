import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDetailsComponent } from './components/main-details/main-details.component';



@NgModule({
  declarations: [
    MainDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainDetailsComponent
  ]
})
export class DetailsModule { }
