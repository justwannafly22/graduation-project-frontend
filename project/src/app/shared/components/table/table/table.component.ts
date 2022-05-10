import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild, Input } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Observable } from "rxjs";
import { ProductResponseInterface } from "src/app/shared/interfaces/product/product-response.interface";
import { PersistanceService } from "src/app/shared/services/persistanse.service";
import { DataTableDataSource } from "./table-data-sourse";


enum InputDataType {
  EmployeeType = 'employee',
  ProjectType = 'project',
  CvType = 'cv',
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
  @ViewChild(MatTable) table!: MatTable<ProductResponseInterface
    // EmployeeResponseInterface | ProjectResponseInterface | CvResponseInterface
  >;
  public dataSource: DataTableDataSource;
  @Input() public dataType!: string;
  @Input() public collection!:
  ProductResponseInterface[]
    // | EmployeeResponseInterface[]
    // | CvResponseInterface[]
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
    //this.store.dispatch(getProjectsAction());
   // this.store.dispatch(getEmployeesAction());
  }

  ngAfterViewInit(): void {
    this.displayedColumns = this.columns;
    this.table.dataSource = this.collection;
    // this.collection.pipe(untilDestroyed(this));
  }
  public selectElement(
    item:
        ProductResponseInterface
      // | ProjectResponseInterface
      // | CvResponseInterface
  ): void {
    switch (this.dataType) {
      case InputDataType.EmployeeType:
        this.persistanceService.set('accountId', item.id);
        this._router.navigate([`main/employees/account-employee`]);
        break;
      case InputDataType.ProjectType:
        this.persistanceService.set('accountId', item.id);
        this._router.navigate([`main/projects/separate-project`]);
        break;
      case InputDataType.CvType:
        this.persistanceService.set('accountId', item.id);
        this._router.navigate([`main/cv/separate-cv`]);
    }
  }
  displayed = () =>
    (this.displayedColumns || []).map((value: any) => value.dataField);
}
