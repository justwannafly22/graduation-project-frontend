import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map, Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import { ProductRequestInterface } from "src/app/shared/interfaces/product/product-request.interfase";
import { ProductResponseInterface } from "src/app/shared/interfaces/product/product-response.interface";

@UntilDestroy()
@Injectable()
export class DetailsService {
  constructor(private http: HttpClient) {}

  public getProduct(id: string): Observable<ProductResponseInterface> {
    const url = `${environment.replacedPartApiUrl}/?id=${id}`;
    return this.http.get<ProductResponseInterface>(url).pipe( untilDestroyed(this),map((response: ProductResponseInterface) => response));
  }

  public getProducts(): Observable<ProductResponseInterface[]> {
    const url = environment.replacedPartApiUrl;
    return this.http
      .get<ProductResponseInterface[]>(url)
      .pipe(untilDestroyed(this),map((response: ProductResponseInterface[]) => {
          console.log("service",response);
         return  response}));
  }

  public addCv(data: ProductRequestInterface): Observable<ProductResponseInterface> {
    const url = environment.replacedPartApiUrl + '/cv';
    return this.http
      .post<ProductResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: ProductResponseInterface) => response));
  }

  public delCv(id: string): Observable<{}> {
    const url = `${environment.replacedPartApiUrl}/cv`;
    return this.http.request('delete', url, { body: { id: id } });
  }
  public changeCv(data: ProductRequestInterface): Observable<ProductResponseInterface> {
    const url = environment.replacedPartApiUrl + '/cv';
    return this.http
      .put<ProductResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: ProductResponseInterface) => response));
  }
}
