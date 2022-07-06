import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { AuthService } from 'src/app/auth/services/auth.service'
import {
  loginAction,
  loginActionFailure,
  loginActionSuccess,
} from 'src/app/auth/store/actions'
import { LocalStorageService } from 'src/app/shared/services/local-storage.service'
import { CurrentUser } from 'src/app/shared/types/current-user'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUser) => {
            this.localStorageService.set('token', currentUser.token)
            return loginActionSuccess({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(loginActionFailure({ errors: errorResponse.error.errors }))
          )
        )
      })
    )
  )

  redirectAfterLoginSuccess$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(loginActionSuccess),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  )

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
}
