
export class EvalSalRequest {

  action:string='get';
  rate_freq:string ='hour';
  hpday:number=8;
  dpweek:number=5;
  maxHpWeek:number=40;
  hSupRate:number=1.5;
  nOT2:number=0;
  ot2Rate:number=2;
  country_code='US';
  year:number=2021;
  tax_credit:number=3600;
  is_annual_rate:number=0;
  max_taxable:number=142000;
  ss_tax_rate:number=12.4;
  medic_tax_rate:number=2.9;
  max_normal_medic_rate:number=200000;
  extra_rate_over_normal_medic:number=0.9;
  nber_day_pto:number=12;
  nber_holiday:number=5;
  nber_day_vacation:number=14;
  total_monthly_business_expense:number=2000;


  constructor(public is_self_employee:number=0, public rate:number=0, public status:string,public pay_freq:string){

  }


}
