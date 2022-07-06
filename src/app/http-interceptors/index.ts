import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from 'src/app/http-interceptors/auth-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
]
