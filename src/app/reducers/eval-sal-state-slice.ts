import { EvalSalRequest } from '../models/evalSalRequest';
import {SalcalcService} from '../services/salcalc.service';
import { MessageService } from '../services/message.service';
import {EvalSalPayDetail,EvalSalPay} from '../models/eval-sal-pay';

export interface EvalSalSlice {
  model : EvalSalRequest;
  payPeriod : EvalSalPay;
  payYear :EvalSalPay;
  status_m :{};
  pay_freqs :{};
  rate_freqs :{}
}
