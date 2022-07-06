import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { Injectable } from '@angular/core'

import { AuthService } from 'src/app/auth/services/auth.service'
import { CurrentUser } from 'src/app/shared/types/current-user'
import {
  registerAction,
  registerActionFailure,
  registerActionSuccess,
} from 'src/app/auth/store/actions'
import { HttpErrorResponse } from '@angular/common/http'
import { LocalStorageService } from 'src/app/shared/services/local-storage.service'
import { Router } from '@angular/router'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUser) => {
            this.localStorageService.set('token', currentUser.token)
            return registerActionSuccess({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(registerActionFailure({ errors: errorResponse.error.errors }))
          )
        )
      )
    )
  )

  redirectAfterRegisterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerActionSuccess),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
}
