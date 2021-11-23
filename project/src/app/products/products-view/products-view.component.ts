import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PRODUCTS } from 'src/app/shared/mock-products';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../product';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})

export class ProductsViewComponent implements AfterViewInit  {

  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Product>(PRODUCTS);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addProductClick(): void{
    
  }

  openManageView(element: Product): void {
    console.log(element);
  }

}
