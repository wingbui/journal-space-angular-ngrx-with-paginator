import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { registerAction } from 'src/app/auth/store/actions'
import {
  selectAuthIsSubmitting,
  selectBackendErrors,
} from 'src/app/auth/store/selectors'
import { RegisterRequest } from 'src/app/auth/types/register-request'
import { BackendErrors } from 'src/app/shared/types/backend-errors'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean> = this.store.pipe(
    select(selectAuthIsSubmitting)
  )
  backendErrors$: Observable<BackendErrors | null> = this.store.pipe(
    select(selectBackendErrors)
  )

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const request: RegisterRequest = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({ request }))
  }
}
