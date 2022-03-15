import { Action, createReducer, on } from '@ngrx/store';

import {initConf,initConfLoaded,getEvalSal,evalSalResultLoaded,loadEvalSalsFailure} from '../actions/eval-sal.actions';
import {EvalSalSlice} from './eval-sal-state-slice';

import { EvalSalRequest } from '../models/evalSalRequest';
import {SalcalcService} from '../services/salcalc.service';
import { MessageService } from '../services/message.service';
import {EvalSalPayDetail,EvalSalPay} from '../models/eval-sal-pay';

export const evalSalFeatureKey = 'evalSal';


export const initialState: EvalSalSlice = {

  model : new EvalSalRequest(0,50,'single','bimonth'),
  payPeriod :new EvalSalPay(),
  payYear :new EvalSalPay(),
  status_m :{},
  pay_freqs :{},
  rate_freqs : {}
};

//model && rate_freqs && status_m && pay_freqs

export const reducer = createReducer(
  initialState,
  on(initConf, (state, ) => ({
    ...state,
  })),
  on(initConfLoaded, (state,  {config}) => ({
    ...state,
    status_m:getConfigFromJson(config,"status_m"),
    pay_freqs:getConfigFromJson(config,'pay_freq'),
    rate_freqs:getConfigFromJson(config,'rate_freq'),
  })),
  on(getEvalSal, (state, { getParam }) => ({
    ...state,
    model:getParam,
    payPeriod :new EvalSalPay(),
    payYear :new EvalSalPay(),
  })),
  on(evalSalResultLoaded, (state, { resultData }) => ({
    ...state,
    payYear:getResultFromJson(resultData,"annual"),
    payPeriod:getResultFromJson(resultData,state.model.pay_freq),
  })),

);

function getConfigFromJson(conf:any,paramName:string){


  console.log('This is getConfigFromJson with conf->',conf);

  if(!conf) return {};

  let parsed=JSON.parse(JSON.stringify(conf));
  console.log('This is getConfigFromJson with parsed->',parsed);
  let realVal =parsed.body[paramName];
  console.log('This is getConfigFromJson with realVal->',realVal);
  //return JSON.stringify(realVal);
  return realVal;
}


function getResultFromJson(result:any,paramName:string):EvalSalPay{


  console.log('This is getResultFromJson with conf->',result);

  if(!result) return new EvalSalPay();

  let parsed=JSON.parse(JSON.stringify(result));
  console.log('This is getResultFromJson with parsed->',parsed);
  let realVal =parsed.body[paramName];
  console.log('This is getResultFromJson with realVal->',realVal);
  //return JSON.stringify(realVal);
  let pp:EvalSalPay =new EvalSalPay();
  pp.pay_freq=paramName;
  pp.pay_detail=realVal;

  console.log('This is getResultFromJson with pp->',realVal);

  return pp;
}

export function evalSalReducer(
  state: EvalSalSlice | undefined,
  action: Action,

):EvalSalSlice{
  return reducer(state,action);
}
