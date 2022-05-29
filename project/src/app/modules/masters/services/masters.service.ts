import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map, Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import { MastersRequestInterface } from "src/app/shared/interfaces/masters/masters-request.interface";
import { MastersResponseInterface } from "src/app/shared/interfaces/masters/masters-response.interface";
import { SecondMastersRequestInterface } from "src/app/shared/interfaces/masters/second-request.interface";
import { PersistanceService } from "src/app/shared/services/persistanse.service";

@UntilDestroy()
@Injectable()
export class MastersService {
  constructor(private http: HttpClient, private persistanseService:PersistanceService) {}

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

  public addMaster(data: MastersRequestInterface): Observable<MastersResponseInterface> {
    const url = environment.mastersApiUrl;
    return this.http
      .post<MastersResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: MastersResponseInterface) => response));
  }

  public delMaster(id: string): Observable<{}> {
    const url = `${environment.mastersApiUrl}/${id}`;
    return this.http.delete(url);
  }
  
  public changeMaster(data: MastersRequestInterface,id:string): Observable<MastersResponseInterface> {
    const url = `${environment.mastersApiUrl}/${id}`;
    return this.http
      .put<MastersResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: MastersResponseInterface) => {
        this.persistanseService.set('age', response.age);
        this.persistanseService.set('contactNumber', response.contactNumber);
        this.persistanseService.set('email', response.email);
        this.persistanseService.set('fullName', response.fullName);
        this.persistanseService.set('id', response.id);
        this.persistanseService.set('attendeeId', response.attendeeId);
      return response}));
  }
}
