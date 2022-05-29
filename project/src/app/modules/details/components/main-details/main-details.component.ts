import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { Columns } from 'src/app/shared/interfaces/columns.interface';
import { ProductResponseInterface } from 'src/app/shared/interfaces/product/product-response.interface';
import { DetailsService } from '../../services/details.service';

@UntilDestroy()
@Component({
  selector: 'app-main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDetailsComponent implements OnInit {
  public outlet: boolean = true;
  public details!:any[];
  public qwe!:any;
  constructor(
    private router: Router,
    private detailsService : DetailsService
  ) {
  }
  ngOnInit(): void {
   this.detailsService.getDetails().subscribe(item=>{
     console.log("kfg",item);
     this.details = item;
    }
     )
  }

   
  public columns: Columns[] = [
    { headerName: 'Name', dataField: 'name',type: "text"},
    { headerName: 'Price', dataField: 'totalPrice',type: "number"},
    { headerName: 'Description', dataField: 'advancedInfo',type: "text" },
  ];
  // newEmployee(): void {
  //   this.router.navigate(['main/employees/add-employee']);
  // }
  onActivate = () => (this.outlet = false);
  onDeactivate = () => (this.outlet = true);
}


