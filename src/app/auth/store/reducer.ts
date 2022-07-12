import { AuthState } from 'src/app/auth/types/auth-state'
import { createReducer, on } from '@ngrx/store'
import {
  getCurrentUser,
  getCurrentUserFailure,
  getCurrentUserSuccess,
  loginAction,
  loginActionFailure,
  loginActionSuccess,
  registerAction,
  registerActionFailure,
  registerActionSuccess,
} from 'src/app/auth/store/actions'

const initialState: AuthState = {
  currentUser: null,
  isLoading: false,
  isLoggedIn: null,
  isSubmitting: false,
  validationErrors: null,
}

export const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(registerActionSuccess, (state, action) => ({
    ...state,
    currentUser: action.currentUser,
    isLoggedIn: true,
    isSubmitting: false,
  })),
  on(registerActionFailure, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(
    loginAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(loginActionSuccess, (state, action) => ({
    ...state,
    currentUser: action.currentUser,
    isLoggedIn: true,
    isSubmitting: false,
  })),
  on(loginActionFailure, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(getCurrentUser, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentUserSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(getCurrentUserFailure, (state) => ({
    ...state,
    currentUser: null,
    isLoading: false,
    isLoggedIn: false,
  }))
)
// export const reducers = (state: AuthState, action: Action): AuthState => {
//   return authReducer(state, action)
// }
