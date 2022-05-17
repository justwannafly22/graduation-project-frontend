import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainClientsComponent } from './components/main-clients/main-clients.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { ClientsService } from './services/clients.service';
import { ChosenClientComponent } from './components/chosen-client/chosen-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldsModule } from 'src/app/shared/components/inputs/input-fields.module';
import { ClientAddComponent } from './components/client-add/client-add.component';

@NgModule({
  declarations: [
    MainClientsComponent,
    ChosenClientComponent,
    ClientAddComponent
  ],
  providers:[ClientsService],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    ReactiveFormsModule,
    InputFieldsModule
  ],
  exports:[
    MainClientsComponent,
    ChosenClientComponent,
    ClientAddComponent
  ]
})
export class ClientsModule { }
