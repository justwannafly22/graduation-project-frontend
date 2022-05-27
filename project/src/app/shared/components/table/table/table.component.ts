import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { ChosenRepComponent } from 'src/app/modules/repairs/components/chosen-rep/chosen-rep.component';
import { ProductResponseInterface } from 'src/app/shared/interfaces/product/product-response.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';
import { DataTableDataSource } from './table-data-sourse';

enum InputDataType {
  DetailsType = 'details',
  MastersType = 'masters',
  ClientsType = 'clients',
  ProductsType = 'products',
  RepairsType = 'repairs',
}
@UntilDestroy()
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductResponseInterface>;
  public dataSource: DataTableDataSource;
  @Input() public dataType!: string;
  @Input() public collection!: any[];
  @Input() public columns: any;
  public tableSize!: number;
  displayedColumns: any;
  id!: string;
  constructor(
    private _router: Router,
    private persistanceService: PersistanceService,
    public dialog: MatDialog, 
    private cdr:ChangeDetectorRef
  ) {
    this.dataSource = new DataTableDataSource();
    console.log('input table', this.collection);

    //this.store.dispatch(getProjectsAction());
    //this.store.dispatch(getEmployeesAction());
  }

  ngAfterViewInit(): void {
    this.displayedColumns = this.columns;
    this.table.dataSource = this.collection;
    console.log('table', this.table.dataSource);
    //this.collection.pipe(untilDestroyed(this));
  }
  public selectElement(item: any): void {
    switch (this.dataType) {
      case InputDataType.MastersType:
        this.persistanceService.set('accountId', item.id);
        this._router.navigate([`body/masters/chosen-master`]);
        break;
      case InputDataType.ClientsType:
        this.persistanceService.set('accountId', item.id);
        this._router.navigate([`body/clients/chosen-client`]);
        break;
      case InputDataType.RepairsType:
        this.persistanceService.set('accountId', item.id);
        const dialogRef = this.dialog.open(ChosenRepComponent, {
          width: 'auto',
          data: { user: this.id, data: undefined },
        });
        dialogRef.afterClosed().subscribe((result) => {});
        this.cdr.detectChanges();
        break;
    }
  }
  displayed = () =>
    (this.displayedColumns || []).map((value: any) => value.dataField);
}
