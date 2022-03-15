import { ActionReducerMap } from '@ngrx/store';

import {EvalSalSlice} from './eval-sal-state-slice';
import {evalSalReducer} from './eval-sal.reducer';

export interface AppState {
  evalSals: EvalSalSlice;
}

export const reducers: ActionReducerMap<AppState> = {
  evalSals: evalSalReducer
};
