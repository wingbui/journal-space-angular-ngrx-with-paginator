import { ActivatedRoute, Router } from '@angular/router'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { getFeedAction } from 'src/app/shared/modules/feed/store/actions'
import {
  selectFeedData,
  selectFeedError,
  selectFeedIsLoading,
} from 'src/app/shared/modules/feed/store/selectors'
import { FeedResponse } from 'src/app/shared/modules/feed/types/feed-response'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string = ''

  limit = 20
  baseURL: string = this.router.url.split('?')[0]
  sub?: Subscription
  currentPage = 1

  isLoading$: Observable<boolean> = this.store.pipe(select(selectFeedIsLoading))
  error$: Observable<HttpErrorResponse | null> = this.store.pipe(
    select(selectFeedError)
  )
  data$: Observable<FeedResponse | null> = this.store.pipe(
    select(selectFeedData)
  )

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe((params) => {
      this.currentPage = Number(params['page'] || this.currentPage)
      this.fetchFeeds()
      console.log(this.baseURL)
    })
  }

  fetchFeeds() {
    const offset = this.currentPage * this.limit - this.limit
    let url = environment.apiUrl + '/' + this.apiUrlProps
    this.store.dispatch(
      getFeedAction({
        url: `
          ${url}?page=${this.currentPage}&offset=${offset}&limit=${this.limit}
        `,
      })
    )
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
