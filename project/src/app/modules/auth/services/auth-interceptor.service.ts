import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PersistanceService } from "src/app/shared/services/persistanse.service";

  
  @Injectable()
  export class TokenInterceptor implements HttpInterceptor {
    constructor(private persistanseService: PersistanceService) {}
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const token = this.persistanseService.get('accessToken');
      request = request.clone({
        setHeaders: {
            Bearer: token ? token: undefined,
        },
      });
      return next.handle(request);
    }
  }
  