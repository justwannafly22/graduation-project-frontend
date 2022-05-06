import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReportingComponent } from './components/main-reporting/main-reporting.component';

@NgModule({
  declarations: [
    MainReportingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainReportingComponent
  ]
})
export class ReportingModule { }
