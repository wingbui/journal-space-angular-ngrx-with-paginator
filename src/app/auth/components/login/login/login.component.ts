import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { BackendErrors } from 'src/app/shared/types/backend-errors'
import { loginAction } from 'src/app/auth/store/actions'
import { LoginRequest } from 'src/app/auth/types/login-request'
import {
  selectAuthIsSubmitting,
  selectBackendErrors,
} from 'src/app/auth/store/selectors'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean> = this.store.pipe(
    select(selectAuthIsSubmitting)
  )
  backendErrors$: Observable<BackendErrors | null> = this.store.pipe(
    select(selectBackendErrors)
  )

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const request: LoginRequest = {
      user: this.form.value,
    }
    this.store.dispatch(loginAction({ request }))
  }
}
