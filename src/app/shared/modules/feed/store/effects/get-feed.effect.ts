import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions'
import { FeedResponse } from 'src/app/shared/modules/feed/types/feed-response'

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) =>
        this.feedService.getFeed(url).pipe(
          map((feed: FeedResponse) => getFeedSuccessAction({ feed })),
          catchError((errorResponse: HttpErrorResponse) =>
            of(getFeedFailureAction({ error: errorResponse }))
          )
        )
      )
    )
  )
  constructor(private actions$: Actions, private feedService: FeedService) {}
}
