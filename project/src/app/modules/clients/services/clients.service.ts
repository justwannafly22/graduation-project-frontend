import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map, Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import { ClientsResponseInterface } from "src/app/shared/interfaces/clients/clients-response.interface";
import { SecondClientsRequestInterface } from "src/app/shared/interfaces/clients/second-clients-request.interface";

@UntilDestroy()
@Injectable()
export class ClientsService {
  constructor(private http: HttpClient) {}

  public getClient(id: string): Observable<ClientsResponseInterface> {
    const url = `${environment.clientsApiUrl}/${id}`;
    return this.http.get<ClientsResponseInterface>(url).pipe( untilDestroyed(this),map((response: ClientsResponseInterface) => response));
  }
  
  public getClientByAttendeeId(attendeeId: string): Observable<ClientsResponseInterface> {
    const url = `${environment.clientsApiUrl}/${attendeeId}`;
    return this.http.post<ClientsResponseInterface>(url, null).pipe( untilDestroyed(this),map((response: ClientsResponseInterface) => response));
  }

  public getClients(): Observable<ClientsResponseInterface[]> {
    const url = environment.clientsApiUrl;
    return this.http
      .get<ClientsResponseInterface[]>(url)
      .pipe(untilDestroyed(this),map((response: ClientsResponseInterface[]) => {
          console.log("service",response);
         return  response}));
  }

  public addClient(data: SecondClientsRequestInterface): Observable<ClientsResponseInterface> {
    const url = environment.clientsApiUrl;
    return this.http
      .post<ClientsResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: ClientsResponseInterface) => response));
  }

  public delClient(id: string): Observable<{}> {
    const url = `${environment.clientsApiUrl}/${id}`;
    return this.http.delete(url);
  }

  public changeClient(data: SecondClientsRequestInterface, id:string): Observable<ClientsResponseInterface> {
    const url = `${environment.clientsApiUrl}/${id}`;
    return this.http
      .put<ClientsResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: ClientsResponseInterface) => response));
  }
}
