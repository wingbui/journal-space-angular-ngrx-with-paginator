import { AuthState } from 'src/app/auth/types/auth-state'
import { createFeatureSelector, createSelector } from '@ngrx/store'

export const selectAuth = createFeatureSelector<AuthState>('auth')

export const selectAuthIsSubmitting = createSelector(
  selectAuth,
  (state: AuthState) => state.isSubmitting
)

export const selectBackendErrors = createSelector(
  selectAuth,
  (state: AuthState) => state.validationErrors
)

export const selectIsLoggedIn = createSelector(
  selectAuth,
  (state: AuthState) => state.isLoggedIn
)

// this state is derived from isLoggedIn
export const selectIsAnonymous = createSelector(
  selectAuth,
  (state: AuthState) => !state.isLoggedIn
)

export const selectCurrentUser = createSelector(
  selectAuth,
  (state: AuthState) => state.currentUser
)

