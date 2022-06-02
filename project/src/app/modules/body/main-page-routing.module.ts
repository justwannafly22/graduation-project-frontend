import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChosenClientComponent } from '../clients/components/chosen-client/chosen-client.component';
import { ClientAddComponent } from '../clients/components/client-add/client-add.component';
import { MainClientsComponent } from '../clients/components/main-clients/main-clients.component';
import { MainDetailsComponent } from '../details/components/main-details/main-details.component';
import { ChosenMasterComponent } from '../masters/components/chosen-master/chosen-master.component';
import { MainMastersComponent } from '../masters/components/main-masters/main-masters.component';
import { MasterAddComponent } from '../masters/components/master-add/master-add.component';
import { MainProductComponent } from '../products/components/main-product/main-product.component';
import { ChosenRepComponent } from '../repairs/components/chosen-rep/chosen-rep.component';
import { MainRepairsComponent } from '../repairs/components/main-repairs/main-repairs.component';
import { MainReportingComponent } from '../reporting/components/main-reporting/main-reporting.component';
import { MyProductComponent } from './components/main-product/main-product.component';

import { MainComponent } from './components/main/main.component';
import { MyRepComponent } from './components/my-rep/my-rep.component';
import { NeverComponent } from './components/never/never.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'body/never',
      component: NeverComponent,},
      {
        path: 'my-repairs',
        component: MyRepComponent,
      },
      {
        path: 'my-product',
        component: MyProductComponent,
      },
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
        children: [
          {
            path: 'choosen-repairs',
            component: ChosenRepComponent,
          },
          // {
          //   path: 'my-repairs',
          //   component: MyRepComponent,
          // },
        ],
      },
      {
        path: 'masters',
        component: MainMastersComponent,
        children: [
          {
            path: 'chosen-master',
            component: ChosenMasterComponent,
          },
          {
            path: 'add-master',
            component: MasterAddComponent,
          },
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
          {
            path: 'add-client',
            component: ClientAddComponent,
          },
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
