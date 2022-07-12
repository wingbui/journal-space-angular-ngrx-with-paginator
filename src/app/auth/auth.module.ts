import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

import { RegisterEffect } from 'src/app/auth/store/effects/register.effect'
import { authReducer } from 'src/app/auth/store/reducer'
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module'
import { LoginEffect } from 'src/app/auth/store/effects/login.effect'
import { LoginComponent } from './components/login/login/login.component'
import { GetCurrentUserEffect } from 'src/app/auth/store/effects/get-current-user.effect'
import { RegisterComponent } from 'src/app/auth/components/register/register/register.component'

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    BackendErrorMessagesModule,
    CommonModule,
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', authReducer),
  ],
})
export class AuthModule {}
