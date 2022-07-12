import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { FeedResponse } from 'src/app/shared/modules/feed/types/feed-response'

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<FeedResponse> {
    return this.http.get<FeedResponse>(url)
  }
}
