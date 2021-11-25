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

    private headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
    
    private requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.headerDict), 
    };

    private productsUrl = 'http://localhost:5013/api/v1/products';

    constructor(
        private readonly logger: Logger,
        private readonly http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl, this.requestOptions)
        .pipe(
            tap(_ => this.logger.log('fetched products')),
            catchError(this.handleError<Product[]>('getProducts', []))
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