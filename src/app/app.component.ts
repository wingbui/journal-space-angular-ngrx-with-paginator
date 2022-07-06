import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

import { getCurrentUser } from 'src/app/auth/store/actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'journal-space'

  constructor(private store: Store) {
    this.store.dispatch(getCurrentUser())
  }
}
