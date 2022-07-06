import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { StoreModule } from '@ngrx/store'

import { authReducer } from 'src/app/auth/store/reducer'
import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('auth', authReducer),
        RouterTestingModule
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the login form with 2 controls (email, password)', () => {
    expect(component.form.contains('email')).toBe(true)
    expect(component.form.contains('password')).toBe(true)
  })

  it('should make the email control required', () => {
    let control = component.form.get('email')
    control?.setValue('')
    expect(control?.valid).toBeFalsy()
  })
})
