import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { ProductResponseInterface } from 'src/app/shared/interfaces/product/product-response.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';
import { DataTableDataSource } from './table-data-sourse';

enum InputDataType {
  DetailsType = 'details',
  MastersType = 'masters',
  ClientsType = 'clients',
  ProductsType = 'products'
}
@UntilDestroy()
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<
  ProductResponseInterface
  >;
  public dataSource: DataTableDataSource;
  @Input() public dataType!: string;
  @Input() public collection!: 
  any[]
  ;
  @Input() public columns: any;
  public tableSize!: number;
  displayedColumns: any;
  id!: string;
  constructor(
    private _router: Router,
    private persistanceService: PersistanceService,
    //private store: Store
  ) {
    this.dataSource = new DataTableDataSource();
    console.log("input table",this.collection);
    
    //this.store.dispatch(getProjectsAction());
    //this.store.dispatch(getEmployeesAction());
  }

  ngAfterViewInit(): void {
    this.displayedColumns = this.columns;
    this.table.dataSource = this.collection;
    console.log("table",this.table.dataSource);
    //this.collection.pipe(untilDestroyed(this));
  }
  public selectElement(
    item:ProductResponseInterface
  ): void {
    switch (this.dataType) {
      case InputDataType.DetailsType:
        this.persistanceService.set('accountId', item.id);
        this._router.navigate([`main/employees/account-employee`]);
        break;
      // case InputDataType.ProjectType:
      //   this.persistanceService.set('accountId', item.id);
      //   this._router.navigate([`main/projects/separate-project`]);
      //   break;
      // case InputDataType.CvType:
      //   this.persistanceService.set('accountId', item.id);
      //   this._router.navigate([`main/cv/separate-cv`]);
    }
  }
  displayed = () =>
    (this.displayedColumns || []).map((value: any) => value.dataField);
}
