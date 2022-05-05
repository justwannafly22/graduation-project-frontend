import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full',
      },
      // {
      //   path: 'news',
      //   component: NewsFeedComponent,
      // },
      // {
      //   path: 'employees',
      //   component: EmployeesComponent,
      //   data: { breadcrumb: { alias: 'employees' } },
      //   children: [
      //     {
      //       path: 'add-employee',
      //       data: { breadcrumb: { alias: 'add-employee' } },
      //       component: AddEmployeeComponent,
      //     },
      //     {
      //       path: 'account-employee',
      //       data: { breadcrumb: { alias: 'account-employee' } },
      //       component: AccountEmployeeComponent,
      //     },
      //   ],
      // },
      // {
      //   path: 'cv',
      //   component: AllCvComponent,
      //   data: { breadcrumb: { alias: 'cv' } },
      //   children: [
      //     {
      //       path: 'separate-cv',
      //       data: { breadcrumb: { alias: 'separate-cv' } },
      //       component: SeparateCvComponent,
      //     },
      //   ],
      // },
      // {
      //   path: 'projects',
      //   data: { breadcrumb: { alias: 'projects' } },
      //   component: ProjectsComponent,
      //   children: [
      //     {
      //       path: 'add-projects',
      //       data: { breadcrumb: { alias: 'add-projects' } },
      //       component: AddProjectComponent,
      //     },
      //     {
      //       path: 'separate-project',
      //       data: { breadcrumb: { alias: 'separate-project' } },
      //       component: SeparateProjectComponent,
      //     },
      //   ],
      // },
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
