import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { LoginRequestInterface } from 'src/app/shared/interfaces/auth/login-request.interface';
import { LoginResponseIterface } from 'src/app/shared/interfaces/auth/login-response.interface';
import { PermResponseInterface } from 'src/app/shared/interfaces/auth/permissions-rsponse.interface';
import { RegisterRequestInterface } from 'src/app/shared/interfaces/auth/register-request.interface';

@UntilDestroy()
@Injectable()
export class AuthServices {
  constructor(private http: HttpClient) {}
  public registration(
    data: RegisterRequestInterface
  ): Observable<LoginResponseIterface> {
    const apiUrl = `${environment.authApiUrl}/register-user`;
    return this.http.post<RegisterRequestInterface>(apiUrl, data).pipe(
      map((response: any) => response)
    );
  }

  login(data: LoginRequestInterface): Observable<LoginResponseIterface> {
    const url = environment.authApiUrl + '/login';
    return this.http.post<LoginResponseIterface>(url, data).pipe(map((i) => i));
  }

  getPermissions(token: string): Observable<PermResponseInterface> {
    const url = environment.authApiUrl + '/get-permissions';
    const request = {
      token: token
    };

    return this.http
      .post<PermResponseInterface>(url, request)
      .pipe(map((response: PermResponseInterface) => response));
  }
}
