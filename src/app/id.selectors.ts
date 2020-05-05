import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './id-reducer.reducer';

export const featureSelector = createFeatureSelector<State>('featureName');
export const selectId = createSelector(featureSelector, state => state.selectedId);
