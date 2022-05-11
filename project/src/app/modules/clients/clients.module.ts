import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainClientsComponent } from './components/main-clients/main-clients.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { ClientsService } from './services/clients.service';

@NgModule({
  declarations: [
    MainClientsComponent
  ],
  providers:[ClientsService],
  imports: [
    CommonModule,
    TableModule,
    RouterModule
  ]
})
export class ClientsModule { }
