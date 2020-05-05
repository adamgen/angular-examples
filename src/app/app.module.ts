import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffectsService } from './router-effects.service';
import { HomeComponent } from './home.component';
import { reducer } from './id-reducer.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      router: routerReducer,
      featureName: reducer,
    }, {}),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: 1
    }),
    EffectsModule.forRoot([RouterEffectsService]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Router 🧙🏼‍♂️effects',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
