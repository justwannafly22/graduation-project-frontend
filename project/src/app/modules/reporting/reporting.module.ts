import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReportingComponent } from './components/main-reporting/main-reporting.component';
import {AccordionModule} from 'primeng/accordion';
import { ApplicationComponent } from './components/application/application.component';     
import { DilaogModule } from 'src/app/shared/components/dialog/dialog.module';

@NgModule({
  declarations: [
    MainReportingComponent,
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    DilaogModule
  ],
  exports:[
    MainReportingComponent
  ]
})
export class ReportingModule { }
