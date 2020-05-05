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
      selectedId: reducer,
    }, {}),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: 1,
    }),
    EffectsModule.forRoot([RouterEffectsService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
