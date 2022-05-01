import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from '../auth/components/auth-login/auth-login.component';
import { AuthRegisterComponent } from '../auth/components/auth-register/auth-register.component';
import { AuthBasicComponent } from './components/auth-basic/auth-basic.component';

const routes: Routes = [
  {
    path: '',
    component: AuthBasicComponent,
    children: [
      {
        path: 'login',
        component: AuthLoginComponent,
      },
      {
        path: 'register',
        component: AuthRegisterComponent,
      },
      {
        path: '**',
        component: AuthLoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
