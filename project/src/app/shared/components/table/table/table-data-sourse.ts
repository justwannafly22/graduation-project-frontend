import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, merge, Observable, of as observableOf } from 'rxjs';
import { ProductResponseInterface } from 'src/app/shared/interfaces/product/product-response.interface';


@UntilDestroy()
export class DataTableDataSource extends DataSource<
ProductResponseInterface
> {
  connect(
    collectionViewer: CollectionViewer
  ): Observable<
    readonly (
      ProductResponseInterface
    )[]
  > {
    throw new Error('Method not implemented.');
  }
  disconnect(collectionViewer: CollectionViewer): void {
    throw new Error('Method not implemented.');
  }
  data:
  ProductResponseInterface[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  constructor() {
    super();
  }
}
