import { Action, createReducer, on } from '@ngrx/store';
import { setIds } from './id.actions';


export const idReducerFeatureKey = 'featureName';

export interface State {
  selectedId: string;
}

export const initialState: State = {
  selectedId: '',
};


export const reducer = createReducer(
  initialState,
  on(setIds, (state, { id }) => ({ ...state, selectedId: id }))
);

