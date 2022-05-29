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
  
  // ToDo: remove.
  public getReports(): Observable<RepairsResponseInterface[]> {
    const url = environment.repairsApiUrl;
    return this.http
      .get<RepairsResponseInterface[]>(url)
      .pipe(untilDestroyed(this),map((response: RepairsResponseInterface[]) => {
          console.log("service",response);
         return  response}));
  }



}
