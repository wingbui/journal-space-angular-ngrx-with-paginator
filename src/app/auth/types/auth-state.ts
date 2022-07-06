import { BackendErrors } from 'src/app/shared/types/backend-errors'
import { CurrentUser } from 'src/app/shared/types/current-user'

export interface AuthState {
  validationErrors: BackendErrors | null
  currentUser: CurrentUser | null
  isLoading: boolean
  isLoggedIn: boolean | null
  isSubmitting: boolean
}
