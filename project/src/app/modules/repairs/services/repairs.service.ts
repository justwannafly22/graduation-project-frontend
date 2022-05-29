import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { MastersRequestInterface } from 'src/app/shared/interfaces/masters/masters-request.interface';
import { MastersResponseInterface } from 'src/app/shared/interfaces/masters/masters-response.interface';
import { RepairsRequestInterface } from 'src/app/shared/interfaces/repairs/repairs-request.interface';
import { RepairsResponseInterface } from 'src/app/shared/interfaces/repairs/repairs-response.interface';

@UntilDestroy()
@Injectable()
export class RepairsService {
  constructor(private http: HttpClient) {}

  public getRepair(id: string): Observable<RepairsResponseInterface> {
    const url = `${environment.repairsApiUrl}/${id}`;
    return this.http.get<RepairsResponseInterface>(url).pipe(
      untilDestroyed(this),
      map((response: RepairsResponseInterface) => response)
    );
  }

  public getRepairByClient(id: string): Observable<RepairsResponseInterface[]> {
    const url = `${environment.repairsApiUrl}?clientId=${id}`;
    return this.http.get<RepairsResponseInterface[]>(url).pipe(
      untilDestroyed(this),
      map((response: RepairsResponseInterface[]) => response)
    );
  }

  public getRepairsByMaster(id: string): Observable<RepairsResponseInterface> {
    const url = `${environment.repairsApiUrl}?masterId=${id}`;
    return this.http.get<RepairsResponseInterface>(url).pipe(
      untilDestroyed(this),
      map((response: RepairsResponseInterface) => response)
    );
  }

  public getRepairs(): Observable<RepairsResponseInterface[]> {
    const url = environment.repairsApiUrl;
    return this.http.get<RepairsResponseInterface[]>(url).pipe(
      untilDestroyed(this),
      map((response: RepairsResponseInterface[]) => {
        console.log('service', response);
        return response;
      })
    );
  }

  public addRepair(
    data: RepairsRequestInterface
  ): Observable<RepairsResponseInterface> {
    const url = environment.repairsApiUrl;
    return this.http.post<RepairsResponseInterface>(url, data).pipe(
      untilDestroyed(this),
      map((response: RepairsResponseInterface) => {
        console.log('add repair service', response);
        return response;
      })
    );
  }

  public changeRepair(data: RepairsResponseInterface): Observable<RepairsResponseInterface> {
    const url = environment.repairsApiUrl;
    return this.http
      .put<RepairsResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: RepairsResponseInterface) => response));
  }
}
