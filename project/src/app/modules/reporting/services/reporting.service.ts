import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map, Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import { MastersRequestInterface } from "src/app/shared/interfaces/masters/masters-request.interface";
import { MastersResponseInterface } from "src/app/shared/interfaces/masters/masters-response.interface";
import { RepairsRequestInterface } from "src/app/shared/interfaces/repairs/repairs-request.interface";
import { RepairsResponseInterface } from "src/app/shared/interfaces/repairs/repairs-response.interface";

@UntilDestroy()
@Injectable()
export class ReportingService {
  constructor(private http: HttpClient) {}

  public getReport(id: string): Observable<RepairsResponseInterface> {
    const url = `${environment.repairsApiUrl}/?id=${id}`;
    return this.http.get<RepairsResponseInterface>(url).pipe( untilDestroyed(this),map((response: RepairsResponseInterface) => response));
  }

  public getReports(): Observable<RepairsResponseInterface[]> {
    const url = environment.repairsApiUrl;
    return this.http
      .get<RepairsResponseInterface[]>(url)
      .pipe(untilDestroyed(this),map((response: RepairsResponseInterface[]) => {
          console.log("service",response);
         return  response}));
  }

  public addReports(data: RepairsRequestInterface): Observable<RepairsResponseInterface> {
    const url = environment.repairsApiUrl + '/cv';
    return this.http
      .post<RepairsResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: RepairsResponseInterface) => response));
  }

  public delReport(id: string): Observable<{}> {
    const url = `${environment.repairsApiUrl}/cv`;
    return this.http.request('delete', url, { body: { id: id } });
  }
  public changeReport(data: RepairsRequestInterface): Observable<RepairsResponseInterface> {
    const url = environment.repairsApiUrl + '/cv';
    return this.http
      .put<RepairsResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: RepairsResponseInterface) => response));
  }
}
