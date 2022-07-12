import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

import { FeedComponent } from './components/feed/feed.component'
import { feedReducer } from 'src/app/shared/modules/feed/store/reducers'
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service'
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/get-feed.effect'
import { PaginatorModule } from 'src/app/shared/modules/paginator/paginator.module'

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', feedReducer),
    EffectsModule.forFeature([GetFeedEffect]),
    PaginatorModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
