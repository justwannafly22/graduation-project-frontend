import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map, Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import { MastersResponseInterface } from "src/app/shared/interfaces/masters/masters-response.interface";
import { SecondMastersRequestInterface } from "src/app/shared/interfaces/masters/second-request.interface";

@UntilDestroy()
@Injectable()
export class MastersService {
  constructor(private http: HttpClient) {}

  public getMaster(id: string): Observable<MastersResponseInterface> {
    const url = `${environment.mastersApiUrl}/${id}`;
    return this.http.get<MastersResponseInterface>(url).pipe( untilDestroyed(this),map((response: MastersResponseInterface) => response));
  }

  public getMasterByAttendeeId(attendeeId: string): Observable<MastersResponseInterface> {
    const url = `${environment.mastersApiUrl}/${attendeeId}`;
    return this.http.post<MastersResponseInterface>(url, null).pipe( untilDestroyed(this),map((response: MastersResponseInterface) => response));
  }

  public getMasters(): Observable<MastersResponseInterface[]> {
    const url = environment.mastersApiUrl;
    return this.http
      .get<MastersResponseInterface[]>(url)
      .pipe(untilDestroyed(this),map((response: MastersResponseInterface[]) =>response ))
  }

  public addMaster(data: SecondMastersRequestInterface): Observable<MastersResponseInterface> {
    const url = environment.mastersApiUrl;
    return this.http
      .post<MastersResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: MastersResponseInterface) => response));
  }

  public delMaster(id: string): Observable<{}> {
    const url = `${environment.mastersApiUrl}/${id}`;
    return this.http.delete(url);
  }
  
  public changeMaster(data: SecondMastersRequestInterface,id:string): Observable<MastersResponseInterface> {
    const url = `${environment.mastersApiUrl}/${id}`;
    
    return this.http
      .put<MastersResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: MastersResponseInterface) => response));
  }
}
