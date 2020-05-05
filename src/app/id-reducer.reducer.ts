import { Action, createReducer, on } from '@ngrx/store';


export const idReducerFeatureKey = 'idReducer';

export interface State {

}

export const initialState: State = {
  id: '',
};


export const reducer = createReducer(
  initialState,

);

