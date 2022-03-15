import { Dictionary } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { EvalSalRequest } from '../models/evalSalRequest';

export const initConf = createAction(
  '[EvalSal] Init EvalSals'
);

export const initConfLoaded = createAction(
  '[EvalSal] Init EvalSals',
  props<{ config:any }>()
);

export const getEvalSal = createAction(
  '[EvalSal] get getEvalSal',
  props<{ getParam: EvalSalRequest }>()
);

export const evalSalResultLoaded = createAction(
  '[EvalSal] Load evalSalResultLoaded Success',
  props<{ resultData: {} }>()
);

export const loadEvalSals = createAction(
  '[EvalSal] Load EvalSals'
);

export const loadEvalSalsSuccess = createAction(
  '[EvalSal] Load EvalSals Success',
  props<{ data: any }>()
);

export const loadEvalSalsFailure = createAction(
  '[EvalSal] Load EvalSals Failure',
  props<{ error: any }>()
);
