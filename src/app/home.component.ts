import { Store, createFeatureSelector, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { tap, filter, map, catchError } from 'rxjs/operators';
import { Router, RoutesRecognized } from '@angular/router';
import { of } from 'rxjs';
import { selectId } from './id.selectors';

export const selectRouter = createFeatureSelector<any, fromRouter.RouterReducerState<any>>('router');

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);


@Component({
  selector: 'app-root',
  template: `
<div
[style.display]="'flex'"
>
  <button routerLink="/another-id">another-id</button>
  <button routerLink="/yet-another-id">yet-another-id</button>
</div>

The url ID is: {{selectedId$ | async | json}}
`,
  styles: ['']
})
export class HomeComponent implements OnInit {
  selectedId$ = this.store.pipe(select(selectId));
  constructor(
    private store: Store,
  ) {
  }

  ngOnInit() {

  }
}
