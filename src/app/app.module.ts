import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { HttpClientModule } from '@angular/common/http'
import { httpInterceptorProviders } from 'src/app/http-interceptors'
import { NgModule } from '@angular/core'
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store'

import { AppComponent } from 'src/app/app.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { AuthModule } from 'src/app/auth/auth.module'
import { environment } from 'src/environments/environment'
import { GlobalFeedModule } from 'src/app/global-feed/global-feed.module'
import { TopBarModule } from 'src/app/shared/modules/top-bar/top-bar.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    StoreModule.forRoot({ routerReducer }),
    StoreRouterConnectingModule.forRoot(),
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
