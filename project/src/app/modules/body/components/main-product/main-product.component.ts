import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/modules/products/services/product.service';
import { Columns } from 'src/app/shared/interfaces/columns.interface';
import { ProductResponseInterface } from 'src/app/shared/interfaces/product/product-response.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MyProductComponent implements OnInit {
  public products!:ProductResponseInterface[];
  public id:string = this.persistanses.get('id');
  constructor(private productService : ProductsService,private persistanses:PersistanceService) { }

  public columns: Columns[] = [
    { headerName: 'Name', dataField: 'name',type: "text"},
    { headerName: 'Description', dataField: 'description',type: "text" },
  ];
  ngOnInit(): void {
    this.productService.getProductByClient(this.id).subscribe(item=>{
      console.log('products',this.products);
      
      this.products = item;
    })
  }

}
