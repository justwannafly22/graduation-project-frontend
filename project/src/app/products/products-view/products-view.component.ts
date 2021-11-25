import { OnInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ManageWindowComponent } from '../manage-window/manage-window.component';
import { ProductService } from '../services/product-service';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})

export class ProductsViewComponent implements OnInit  {

  displayedColumns: string[] = ['name', 'price', 'description'];
  dataSource = new MatTableDataSource<Product>();
  productList!: Product[];
  isEmpty!: boolean;

  //#region ViewChild
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) 
  sort!: MatSort;
  //#endregion

  constructor(
    private readonly productService: ProductService,
    private readonly dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      //#region FillLists
      this.fillDataSource(data);
      this.productList = data;
      if (data.length == 0) this.isEmpty = true;
      //#endregion

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
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

    dialogRef.afterClosed().subscribe(data => {
        if (data == undefined) return;

        this.productService.createProduct(data as Product).subscribe((newProduct: Product) => {
        this.productList.push(newProduct);
        this.fillDataSource(this.productList);
      })
    });
  }

  fillDataSource(products: Product[]): void {
    this.dataSource.data = products;
  }

}
