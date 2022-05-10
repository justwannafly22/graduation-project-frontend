import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDetailsComponent } from './components/main-details/main-details.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { RouterModule } from '@angular/router';
import { DetailsService } from './services/details.service';



@NgModule({
  declarations: [
    MainDetailsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule
  ],
  providers:[DetailsService],
  exports:[
    MainDetailsComponent
  ]
})
export class DetailsModule { }
