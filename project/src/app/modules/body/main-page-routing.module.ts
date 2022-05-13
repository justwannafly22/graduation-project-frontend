import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChosenClientComponent } from '../clients/components/chosen-client/chosen-client.component';
import { MainClientsComponent } from '../clients/components/main-clients/main-clients.component';
import { MainDetailsComponent } from '../details/components/main-details/main-details.component';
import { ChosenMasterComponent } from '../masters/components/chosen-master/chosen-master.component';
import { MainMastersComponent } from '../masters/components/main-masters/main-masters.component';
import { MainProductComponent } from '../products/components/main-product/main-product.component';
import { MainRepairsComponent } from '../repairs/components/main-repairs/main-repairs.component';
import { MainReportingComponent } from '../reporting/components/main-reporting/main-reporting.component';

import { MainComponent } from './components/main/main.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'details',
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'news',
      //   component: NewsFeedComponent,
      // },
      {
        path: 'details',
        component: MainDetailsComponent,
        // children: [
        //   {
        //     path: 'add-employee',
        //     data: { breadcrumb: { alias: 'add-employee' } },
        //     component: AddEmployeeComponent,
        //   },
        //   {
        //     path: 'account-employee',
        //     data: { breadcrumb: { alias: 'account-employee' } },
        //     component: AccountEmployeeComponent,
        //   },
        // ],
      },
      {
        path: 'repairs',
        component: MainRepairsComponent,
        // children: [
        //   {
        //     path: 'add-employee',
        //     data: { breadcrumb: { alias: 'add-employee' } },
        //     component: AddEmployeeComponent,
        //   },
        //   {
        //     path: 'account-employee',
        //     data: { breadcrumb: { alias: 'account-employee' } },
        //     component: AccountEmployeeComponent,
        //   },
        // ],
      },
      {
        path: 'masters',
        component: MainMastersComponent,
        children: [
          {
            path: 'chosen-master',
            component: ChosenMasterComponent,
          },
          // {
          //   path: 'account-employee',
          //   data: { breadcrumb: { alias: 'account-employee' } },
          //   component: AccountEmployeeComponent,
          // },
        ],
      },
      
      {
        path: 'products',
        component: MainProductComponent,
        // children: [
        //   {
        //     path: 'add-employee',
        //     data: { breadcrumb: { alias: 'add-employee' } },
        //     component: AddEmployeeComponent,
        //   },
        //   {
        //     path: 'account-employee',
        //     data: { breadcrumb: { alias: 'account-employee' } },
        //     component: AccountEmployeeComponent,
        //   },
        // ],
      },
      {
        path: 'clients',
        component: MainClientsComponent,
         children: [
          {
            path: 'chosen-client',
            component: ChosenClientComponent,
          },
        //   {
        //     path: 'account-employee',
        //     data: { breadcrumb: { alias: 'account-employee' } },
        //     component: AccountEmployeeComponent,
        //   },
         ],
      },
      {
        path: 'reporting',
        component: MainReportingComponent,
        // children: [
        //   {
        //     path: 'add-employee',
        //     data: { breadcrumb: { alias: 'add-employee' } },
        //     component: AddEmployeeComponent,
        //   },
        //   {
        //     path: 'account-employee',
        //     data: { breadcrumb: { alias: 'account-employee' } },
        //     component: AccountEmployeeComponent,
        //   },
        // ],
      },
     
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class MainPageRoutingModule {
  constructor() {}
}
