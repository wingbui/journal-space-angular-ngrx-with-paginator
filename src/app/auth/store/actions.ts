import { ActionTypes } from 'src/app/auth/store/actionTypes'
import { BackendErrors } from 'src/app/shared/types/backend-errors'
import { createAction, props } from '@ngrx/store'
import { CurrentUser } from 'src/app/shared/types/current-user'
import { LoginRequest } from 'src/app/auth/types/login-request'
import { RegisterRequest } from 'src/app/auth/types/register-request'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequest }>()
)

export const registerActionSuccess = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
)

export const registerActionFailure = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrors }>()
)

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequest }>()
)

export const loginActionSuccess = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUser }>()
)

export const loginActionFailure = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrors }>()
)

export const getCurrentUser = createAction(
  ActionTypes.GET_CURRENT_USER
)

export const getCurrentUserSuccess = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUser}>()
)

export const getCurrentUserFailure = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
)
