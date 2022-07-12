import { HttpErrorResponse } from '@angular/common/http'
import { FeedResponse } from 'src/app/shared/modules/feed/types/feed-response'

export interface FeedState {
  isLoading: boolean
  data: FeedResponse | null
  error: HttpErrorResponse | null
}
