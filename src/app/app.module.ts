import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AuthModule } from 'src/app/auth/auth.module'
import { EffectsModule } from '@ngrx/effects'
import { environment } from '../environments/environment'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { TopBarModule } from 'src/app/shared/modules/top-bar/top-bar.module'
import { httpInterceptorProviders } from 'src/app/http-interceptors'
import { GlobalFeedModule } from 'src/app/global-feed/global-feed.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TopBarModule,
    GlobalFeedModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
