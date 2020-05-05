import { Store, createFeatureSelector, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { tap, filter, map, catchError } from 'rxjs/operators';
import { Router, RoutesRecognized } from '@angular/router';
import { of } from 'rxjs';

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
<pre>
Url params from NGRX: {{paramsFromNGRX$ | async | json}} <br>
</pre>
`,
  styles: ['']
})
export class HomeComponent implements OnInit {
  title = 'angular-examples';
  paramsFromNGRX$;
  paramsFromRouter$;
  constructor(
    private store: Store,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.paramsFromNGRX$ = this.store.pipe(
      select(selectRouteParams),
      tap(fromPipeTap => console.log({ fromPipeTap })), // logs undefined
      catchError(err => {
        console.log(err);
        return of({ error: err });
      }),
    );

    this.paramsFromRouter$ = this.router.events
      .pipe(
        filter<RoutesRecognized>(event => event instanceof RoutesRecognized),
        map(event => event.state.root.firstChild.params),
        tap(fromRouter => console.log(fromRouter)),
      );

  }
}
