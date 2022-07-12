import { routerNavigationAction } from '@ngrx/router-store'
import { createReducer, on } from '@ngrx/store'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions'
import { FeedState } from 'src/app/shared/modules/feed/types/feed-state'

const initialState: FeedState = {
  isLoading: false,
  error: null,
  data: null,
}

export const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(getFeedSuccessAction, (state, action) => ({
    ...state,
    data: action.feed,
    isLoading: false,
  })),
  on(getFeedFailureAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: null,
    error: action.error,
  })),
  on(routerNavigationAction, (): FeedState => initialState)
)
