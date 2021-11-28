import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule  } from '@angular/forms';
import { ProductsViewComponent } from './products/products-view/products-view.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { MaterialModule } from './shared/material.module';
import { ManageWindowComponent } from './products/manage-window/manage-window.component';
import { CloseManageWindowComponent } from './products/close-manage-window/close-manage-window.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProductsViewComponent,
    AddProductComponent,
    ManageWindowComponent,
    CloseManageWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ManageWindowComponent]
})
export class AppModule { }
