import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/auth/services/auth.service'
import { LocalStorageService } from 'src/app/shared/services/local-storage.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req)
    const token = this.localStorageService.get('token')
    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    })

    return next.handle(req)
  }

  constructor(private localStorageService: LocalStorageService) {}
}
