import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product';
import { catchError, tap } from 'rxjs/operators';
import { Logger } from 'src/app/shared/services/logger';

@Injectable({
    providedIn: 'root',
})

export class ProductService {

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
    
    private productsUrl = 'http://localhost:5013/api/v1/products';

    constructor(
        private readonly logger: Logger,
        private readonly http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl).pipe(
            tap(_ => this.logger.log('fetched products')),
            catchError(this.handleError<Product[]>('getProducts', []))
        );
    }

    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.productsUrl, product, this.httpOptions).pipe(
            tap((newProduct: Product) => this.logger.log(`added product w/ id=${newProduct.id}`)),
            catchError(this.handleError<Product>('addProduct'))
        );
    } 

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            this.logger.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}