// import { CollectionViewer, DataSource } from '@angular/cdk/collections';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
// import { map, merge, Observable, of as observableOf } from 'rxjs';
// import { CvResponseInterface } from 'src/app/shared/interfaces/cv/cv-response.interface';
// import { EmployeeResponseInterface } from 'src/app/shared/interfaces/employee/employees-response.interface';
// import { ProjectResponseInterface } from 'src/app/shared/interfaces/projects/project-response.interface';

// @UntilDestroy()
// export class DataTableDataSource extends DataSource<
//   EmployeeResponseInterface | ProjectResponseInterface | CvResponseInterface
// > {
//   connect(
//     collectionViewer: CollectionViewer
//   ): Observable<
//     readonly (
//       | EmployeeResponseInterface
//       | ProjectResponseInterface
//       | CvResponseInterface
//     )[]
//   > {
//     throw new Error('Method not implemented.');
//   }
//   disconnect(collectionViewer: CollectionViewer): void {
//     throw new Error('Method not implemented.');
//   }
//   data:
//     | EmployeeResponseInterface[]
//     | ProjectResponseInterface[]
//     | CvResponseInterface[] = [];
//   paginator: MatPaginator | undefined;
//   sort: MatSort | undefined;
//   constructor() {
//     super();
//   }
// }
