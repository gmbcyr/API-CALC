import { createFeatureSelector, createSelector } from '@ngrx/store';

import {EvalSalSlice} from '../reducers/eval-sal-state-slice';

const featureKey = 'evalSals';

export const selectEvalSal = createFeatureSelector<EvalSalSlice>(featureKey);

export const modelSelector = createSelector(
  selectEvalSal,
  //(evalSalSlice) => evalSalSlice.model,
  //TODO: if any unstable, revert change below. Done to fix read only of object in store.
  (evalSalSlice) => Object.assign({}, evalSalSlice.model),
);

export const payPeriodSelector = createSelector(
  selectEvalSal,
  (evalSalSlice) => evalSalSlice.payPeriod,
);

export const payYearSelector = createSelector(
  selectEvalSal,
  (evalSalSlice) => evalSalSlice.payYear,
);

export const pay_freqsSelector = createSelector(
  selectEvalSal,
  (evalSalSlice) => evalSalSlice.pay_freqs,
);

export const status_mSelector = createSelector(
  selectEvalSal,
  (evalSalSlice) => evalSalSlice.status_m,
);

export const rate_freqsSelector = createSelector(
  selectEvalSal,
  (evalSalSlice) => evalSalSlice.rate_freqs,
);



