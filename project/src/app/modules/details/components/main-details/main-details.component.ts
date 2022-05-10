import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Columns } from 'src/app/shared/interfaces/columns.interface';
import { ProductResponseInterface } from 'src/app/shared/interfaces/product/product-response.interface';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.css']
})
export class MainDetailsComponent implements OnInit {
  public outlet: boolean = true;
  public details!: ProductResponseInterface[];
  constructor(
    private router: Router,
    private detailsService : DetailsService
  ) {
  }
  ngOnInit(): void {
    this.detailsService.getProducts().subscribe((item: any)=>{
      console.log("component",item);
      
      this.details = item;
      
    })
    console.log(this.details)
  }

  public columns: Columns[] = [
    { headerName: 'First Name', dataField: 'firstName', type: 'text' },
    { headerName: 'Last Name', dataField: 'lastName', type: 'text' },
    { headerName: 'Email', dataField: 'email', type: 'text' },
    { headerName: 'Department', dataField: 'department', type: 'text' },
    {
      headerName: 'Diploma Profession',
      dataField: 'diplomaProfession',
      type: 'text',
    },
  ];
  newEmployee(): void {
    this.router.navigate(['main/employees/add-employee']);
  }
  onActivate = () => (this.outlet = false);
  onDeactivate = () => (this.outlet = true);
}


