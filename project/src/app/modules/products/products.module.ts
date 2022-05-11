import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProductComponent } from './components/main-product/main-product.component';
import { ProductsService } from './services/product.service';
import { RouterModule } from '@angular/router';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
  declarations: [
    MainProductComponent
  ],
   providers:[ProductsService],
  imports: [
    CommonModule,TableModule,
    RouterModule
  ]
})
export class ProductsModule { }
