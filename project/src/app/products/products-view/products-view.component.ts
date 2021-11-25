import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ManageWindowComponent } from '../manage-window/manage-window.component';
import { ProductService } from '../services/product-service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})

export class ProductsViewComponent implements OnInit  {

  displayedColumns: string[] = ['name', 'price', 'description'];
  dataSource = new MatTableDataSource<Product>();
  isEmpty!: boolean;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private readonly productService: ProductService,
    private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.dataSource.data = data;
      if (data.length == 0) this.isEmpty = true;
    });
    this.dataSource.paginator = this.paginator;
  }

  openManageView(element: Product): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;

    dialogConfig.data = element;
    dialogConfig.width = '25%';

    const dialogRef = this.dialog.open(ManageWindowComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    ); 
  }

  addProduct(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;

    dialogConfig.width = '25%';

    const dialogRef = this.dialog.open(AddProductComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

}
