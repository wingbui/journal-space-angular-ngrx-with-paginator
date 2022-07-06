import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

import { AuthResponse } from 'src/app/auth/types/auth-response'
import { CurrentUser } from 'src/app/shared/types/current-user'
import { environment } from 'src/environments/environment'
import { RegisterRequest } from 'src/app/auth/types/register-request'
import { LoginRequest } from 'src/app/auth/types/login-request'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response: AuthResponse) => response.user))
  }

  login(data: LoginRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users/login'
    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response: AuthResponse) => response.user))
  }

  getCurrentUser(): Observable<CurrentUser> {
    const url = environment.apiUrl + '/user'
    return this.http
      .get<AuthResponse>(url)
      .pipe(map((response: AuthResponse) => response.user))
  }

  logout(): void {}
}
