import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map, Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import { MastersRequestInterface } from "src/app/shared/interfaces/masters/masters-request.interface";
import { MastersResponseInterface } from "src/app/shared/interfaces/masters/masters-response.interface";

@UntilDestroy()
@Injectable()
export class MastersService {
  constructor(private http: HttpClient) {}

  public getMaster(id: string): Observable<MastersResponseInterface> {
    const url = `${environment.mastersApiUrl}/${id}`;
    return this.http.get<MastersResponseInterface>(url).pipe( untilDestroyed(this),map((response: MastersResponseInterface) => response));
  }

  public getMasters(): Observable<MastersResponseInterface[]> {
    const url = environment.mastersApiUrl;
    return this.http
      .get<MastersResponseInterface[]>(url)
      .pipe(untilDestroyed(this),map((response: MastersResponseInterface[]) =>response ))
  }

  public addMaster(data: MastersRequestInterface): Observable<MastersResponseInterface> {
    const url = environment.productApiUrl + '/cv';
    return this.http
      .post<MastersResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: MastersResponseInterface) => response));
  }

  public delMaster(id: string): Observable<{}> {
    const url = `${environment.productApiUrl}/cv`;
    return this.http.request('delete', url, { body: { id: id } });
  }
  public changeMaster(data: MastersRequestInterface): Observable<MastersResponseInterface> {
    const url = environment.productApiUrl + '/cv';
    return this.http
      .put<MastersResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: MastersResponseInterface) => response));
  }
}
