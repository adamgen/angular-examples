import { createAction, props } from '@ngrx/store';

export const setIds = createAction('[Id] Load Ids', props<{ id: string }>());
