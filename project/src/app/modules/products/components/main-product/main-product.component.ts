import { Component, OnInit } from '@angular/core';
import { Columns } from 'src/app/shared/interfaces/columns.interface';
import { ProductResponseInterface } from 'src/app/shared/interfaces/product/product-response.interface';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  public products!:ProductResponseInterface[];
  constructor(private productService : ProductsService) { }

  public columns: Columns[] = [
    { headerName: 'Название', dataField: 'name',type: "text"},
    { headerName: 'Описание проблемы', dataField: 'description',type: "text" },
  ];
  ngOnInit(): void {
    this.productService.getProducts().subscribe(item=>{
      console.log('products',this.products);
      
      this.products = item;
    })
  }

}
