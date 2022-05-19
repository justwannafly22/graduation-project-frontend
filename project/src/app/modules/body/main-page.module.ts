import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from 'src/app/environments/environment';
import { MaterialExampleModule } from 'src/app/shared/modules/material.module';
import { ClientsModule } from '../clients/clients.module';
import { DetailsModule } from '../details/details.module';
import { MastersModule } from '../masters/masters.module';
import { ProductsModule } from '../products/products.module';
import { ProductsService } from '../products/services/product.service';
import { RepairsModule } from '../repairs/repairs.module';
import { ReportingModule } from '../reporting/reporting.module';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainComponent } from './components/main/main.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { InputFieldsModule } from 'src/app/shared/components/inputs/input-fields.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { PersonalAreaaComponent } from './components/personal-areaa/personal-areaa.component';

@NgModule({
  declarations: [MainComponent, SideBarComponent, MainHeaderComponent, PersonalAreaaComponent],
  providers: [ProductsService],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ProductsModule,
    CommonModule,
    MainPageRoutingModule,
    MatIconModule,
    MatSidenavModule,
    TranslateModule,
    MatButtonModule,
    MaterialExampleModule,
    TableModule,
    InputFieldsModule,
    DetailsModule,
    MastersModule,
    RepairsModule,
    ClientsModule,
    ReportingModule
  ],
  exports: [PersonalAreaaComponent],
})
export class MainPageModule {
  constructor(private translateService: TranslateService) {
    this.translateService.use(environment.defaultLocale);
  }
}
