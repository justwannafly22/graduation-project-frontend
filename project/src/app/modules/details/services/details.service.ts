import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map, Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import { DetailCreateRequestInterface } from "src/app/shared/interfaces/details/detail-create-request.interface";
import { DetailResponseInterface } from "src/app/shared/interfaces/details/detail-response-model.interface";
import { DetailUpdateRequestInterface } from "src/app/shared/interfaces/details/detail-update-request.interface";

@UntilDestroy()
@Injectable()
export class DetailsService {
  constructor(private http: HttpClient) {}

  public getDetail(id: string): Observable<DetailResponseInterface> {
    const url = `${environment.replacedPartApiUrl}/?id=${id}`;
    return this.http.get<DetailResponseInterface>(url).pipe( untilDestroyed(this),map((response: DetailResponseInterface) => response));
  }

  public getDetails(repairId: string): Observable<DetailResponseInterface[]> {
    const url = `${environment.replacedPartApiUrl}/?requiredId=${repairId}&requiredIdType=RepairId`;
    return this.http
      .get<DetailResponseInterface[]>(url)
      .pipe(untilDestroyed(this),map((response: DetailResponseInterface[]) => {
          console.log("service",response);
         return  response}));
  }

  public addDetail(data: DetailCreateRequestInterface): Observable<DetailResponseInterface> {
    const url = environment.replacedPartApiUrl + '/cv';
    return this.http
      .post<DetailResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: DetailResponseInterface) => response));
  }

  public delDetail(id: string): Observable<{}> {
    const url = `${environment.replacedPartApiUrl}/cv`;
    return this.http.request('delete', url, { body: { id: id } });
  }

  public changeDetail(data: DetailUpdateRequestInterface): Observable<DetailResponseInterface> {
    const url = environment.replacedPartApiUrl + '/cv';
    return this.http
      .put<DetailResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: DetailResponseInterface) => response));
  }
}
