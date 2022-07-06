import { Actions } from '@ngrx/effects'
import { AuthService } from 'src/app/auth/services/auth.service'
import { catchError, EMPTY, map, of, switchMap } from 'rxjs'
import { createEffect, ofType } from '@ngrx/effects'
import { CurrentUser } from 'src/app/shared/types/current-user'
import {
  getCurrentUser,
  getCurrentUserFailure,
  getCurrentUserSuccess,
} from 'src/app/auth/store/actions'
import { Injectable } from '@angular/core'
import { LocalStorageService } from 'src/app/shared/services/local-storage.service'

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCurrentUser),
      switchMap(() => {
        const token = this.localStorageService.get('token')

        if (!token) {
          return of(getCurrentUserFailure())
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUser) =>
            getCurrentUserSuccess({ currentUser })
          ),
          catchError(() => of(getCurrentUserFailure()))
        )
      })
    )
  )

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}
}
