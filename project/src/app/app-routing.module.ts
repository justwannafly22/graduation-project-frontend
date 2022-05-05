import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'body',
    loadChildren: () =>
      import('./modules/body/main-page.module').then((module) => module.MainPageModule),
  }, //main
  {
    path: '**',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((module) => module.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
