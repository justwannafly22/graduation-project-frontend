import { Component, OnInit, ViewChild } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product } from '../product';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})

export class ProductsViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price'];
  myDataArray: Product[] = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
