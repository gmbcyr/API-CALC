import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';
import { catchError, withLatestFrom, exhaustMap, filter, map , mergeMap } from 'rxjs/operators';

import {initConf,initConfLoaded,getEvalSal,evalSalResultLoaded,loadEvalSalsFailure} from '../actions/eval-sal.actions';
import {SalcalcService} from '../services/salcalc.service';
import {AppState} from '../reducers/index';



@Injectable()
export class EvalSalEffects {

  constructor(private actions$: Actions,private store: Store<AppState>,private srvEval:SalcalcService) {}

  public initConf$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initConf),
      // Don't load if we've already loaded.
      withLatestFrom(this.store.select(initConf)),
      //filter(([_, loaded]) => !loaded),
      // Don't handle more than one load request at a time.
      exhaustMap(() =>
        this.srvEval.getEvalSalInitConfig().pipe(
          map((config) => {
            //console.log('This is initConf with config->',config);
            //console.log('This is initConf with config stringify->',JSON.stringify(config));
            return initConfLoaded({ config });
          }),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  public getEvalSal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEvalSal),
      // Don't load if we've already loaded.
      //withLatestFrom(this.store.select(getEvalSal)),
      //filter(([_, loaded]) => !loaded),
      // Don't handle more than one load request at a time.
      exhaustMap((requestParam) =>
        this.srvEval.getEvalSal2(requestParam.getParam).pipe(
          map((resultData) => {
            console.log('This is EFFECT getEvalSal with requestParam->',requestParam);
            console.log('This is EFFECT getEvalSal with resultData->',resultData);
            return evalSalResultLoaded({ resultData });
          }),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

}
