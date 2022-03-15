import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { NgForm } from '@angular/forms';
import {FormsModule,NgForm} from '@angular/forms'

import { EvalSalRequest } from '../../models/evalSalRequest';
import {SalcalcService} from '../../services/salcalc.service';
import { MessageService } from '../../services/message.service';
import {EvalSalPayDetail,EvalSalPay} from '../../models/eval-sal-pay';
import {EvalSalPayDetailsComponent} from '../eval-sal-pay-details/eval-sal-pay-details.component';
import { Dictionary } from '@ngrx/entity';

import { AppState } from '../../reducers';

import {
  modelSelector,
  payPeriodSelector,
  payYearSelector,
  status_mSelector,
  pay_freqsSelector,
  rate_freqsSelector

} from '../../selectors/eval-sal.selectors';

import {
  initConf,
  initConfLoaded,
  getEvalSal,
  evalSalResultLoaded,
  loadEvalSalsFailure} from '../../actions/eval-sal.actions';

@Component({
  selector: 'app-eval-sal',
  templateUrl: './eval-sal.component.html',
  styleUrls: ['./eval-sal.component.css']
})
export class EvalSalComponent implements OnInit {
  selfEmp = ['Yes', 'No'];


  public model$: Observable<EvalSalRequest>;
  public payPeriod$: Observable<EvalSalPay>;
  public payYear$: Observable<EvalSalPay>;
  public status_m$: Observable<{}>;
  public pay_freqs$: Observable<{}>;
  public rate_freqs$: Observable<{}>;

  constructor(private store$: Store<AppState>) {
    this.model$ = this.store$.pipe(select(modelSelector));
    this.payPeriod$ = this.store$.pipe(select(payPeriodSelector));
    this.payYear$ = this.store$.pipe(select(payYearSelector));
    this.status_m$ = this.store$.pipe(select(status_mSelector));
    this.pay_freqs$ = this.store$.pipe(select(pay_freqsSelector));
    this.rate_freqs$ = this.store$.pipe(select(rate_freqsSelector));
   }

  ngOnInit(): void {

    this.store$.dispatch(initConf());
  }

  public handleGetRequest(getParam: EvalSalRequest): void {
    this.store$.dispatch(getEvalSal({ getParam }));
  }

}
