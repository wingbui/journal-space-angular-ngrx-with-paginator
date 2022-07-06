import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { selectCurrentUser, selectIsAnonymous, selectIsLoggedIn } from 'src/app/auth/store/selectors'
import { CurrentUser } from 'src/app/shared/types/current-user'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean | null> = this.store.pipe(
    select(selectIsLoggedIn)
  )

  isAnonymous$: Observable<boolean | null> = this.store.pipe(
    select(selectIsAnonymous)
  )

  currentUser$: Observable<CurrentUser | null> = this.store.pipe(select(selectCurrentUser))

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
