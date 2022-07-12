import { createFeatureSelector, createSelector } from '@ngrx/store'

import { FeedState } from 'src/app/shared/modules/feed/types/feed-state'

export const selectFeed = createFeatureSelector<FeedState>('feed')

export const selectFeedIsLoading = createSelector(
  selectFeed,
  (state: FeedState) => state.isLoading
)

export const selectFeedError = createSelector(
  selectFeed,
  (state: FeedState) => state.error
)

export const selectFeedData = createSelector(
  selectFeed,
  (state: FeedState) => state.data
)
