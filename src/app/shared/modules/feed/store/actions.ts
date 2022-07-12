import { HttpErrorResponse } from '@angular/common/http'
import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/shared/modules/feed/store/actionTypes'
import { FeedResponse } from 'src/app/shared/modules/feed/types/feed-response'

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
)

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{feed: FeedResponse}>()
)

export const getFeedFailureAction = createAction(
  ActionTypes.GET_FEED_FAILURE,
  props<{error: HttpErrorResponse}>()
)
