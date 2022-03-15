
export class EvalSalPay{

  pay_freq:string='';
  pay_detail:EvalSalPayDetail=new EvalSalPayDetail();
}


export class EvalSalPayDetail {

   gain_gross:number=0 ;
   gain_net:number=0 ;
   standard_deduc:number=0 ;
   personal_deduc:number=0 ;
   deduc_total:number=0 ;
   fed_tax:number=0 ;
   ss_tax:number=0 ;
   medicare_tax:number=0 ;
   total_tax:number=0 ;
   hrate:number=0 ;
   other_deduc:number=0 ;
   regular_h:number=0 ;
   regular_pay:number=0 ;
   oth:number=0 ;
   otpay:number=0 ;
   ot2h:number=0 ;
   ot2pay:number=0 ;
}
