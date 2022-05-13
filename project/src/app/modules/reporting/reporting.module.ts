import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReportingComponent } from './components/main-reporting/main-reporting.component';
import {AccordionModule} from 'primeng/accordion';     

@NgModule({
  declarations: [
    MainReportingComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
  ],
  exports:[
    MainReportingComponent
  ]
})
export class ReportingModule { }
