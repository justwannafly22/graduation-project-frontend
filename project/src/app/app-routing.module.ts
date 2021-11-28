import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsViewComponent } from './products/products-view/products-view.component';

const routes: Routes = [
  { path: 'products', component: ProductsViewComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
