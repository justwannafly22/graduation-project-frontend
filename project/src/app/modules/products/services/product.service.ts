import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { map, Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import { ProductRequestInterface } from "src/app/shared/interfaces/product/product-request.interfase";
import { ProductResponseInterface } from "src/app/shared/interfaces/product/product-response.interface";

@UntilDestroy()
@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProduct(id: string): Observable<ProductResponseInterface> {
    const url = `${environment.productApiUrl}/?id=${id}`;
    return this.http.get<ProductResponseInterface>(url).pipe( untilDestroyed(this),map((response: ProductResponseInterface) => response));
  }

  public getProducts(): Observable<ProductResponseInterface[]> {
    const url = environment.productApiUrl;
    return this.http
      .get<ProductResponseInterface[]>(url)
      .pipe(untilDestroyed(this),map((response: ProductResponseInterface[]) => {
          console.log("service",response);
         return  response}));
  }

  public addProduct(data:ProductRequestInterface): Observable<ProductResponseInterface> {
    const url = environment.productApiUrl + '/cv';
    return this.http
      .post<ProductResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: ProductResponseInterface) => response));
  }

  public delProduct(id: string): Observable<{}> {
    const url = `${environment.productApiUrl}/cv`;
    return this.http.request('delete', url, { body: { id: id } });
  }
  public changeProduct(data: ProductRequestInterface): Observable<ProductResponseInterface> {
    const url = environment.productApiUrl + '/cv';
    return this.http
      .put<ProductResponseInterface>(url, data)
      .pipe(untilDestroyed(this),map((response: ProductResponseInterface) => response));
  }
}