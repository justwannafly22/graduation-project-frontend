import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PRODUCTS } from 'src/app/shared/mock-products';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ManageWindowComponent } from '../manage-window/manage-window.component';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})

export class ProductsViewComponent implements AfterViewInit  {

  displayedColumns: string[] = ['id', 'name', 'price', 'description'];
  dataSource = new MatTableDataSource<Product>(PRODUCTS);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private readonly dialog: MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openManageView(element: Product): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = element;

    const dialogRef = this.dialog.open(ManageWindowComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    ); 
  }

}
