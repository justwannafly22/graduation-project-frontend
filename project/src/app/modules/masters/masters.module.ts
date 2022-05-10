import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMastersComponent } from './components/main-masters/main-masters.component';
import { MastersService } from './services/masters.service';



@NgModule({
  declarations: [
    MainMastersComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[MastersService],
  exports:[
    MainMastersComponent
  ]
})
export class MastersModule { }
