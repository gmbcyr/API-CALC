import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
//import { NgForm } from '@angular/forms';
import {FormsModule,NgForm} from '@angular/forms'

import { EvalSalRequest } from '../../models/evalSalRequest';
import {SalcalcService} from '../../services/salcalc.service';
import { MessageService } from '../../services/message.service';
import {EvalSalPayDetail,EvalSalPay} from '../../models/eval-sal-pay';
import {EvalSalPayDetailsComponent} from '../eval-sal-pay-details/eval-sal-pay-details.component';



@Component({
  selector: 'app-eval-sal-form',
  templateUrl: './eval-sal-form.component.html',
  styleUrls: ['./eval-sal-form.component.css']
})
export class EvalSalFormComponent {

  selfEmp = ['Yes', 'No'];


  @Input()
  public model:EvalSalRequest | null =null;

  @Input()
  public status_m :{}|null  ={};
  @Input()
  public pay_freqs :{}|null  ={};
  @Input()
  public rate_freqs :{}|null  ={};

  @Output()
  public evalSal = new EventEmitter<EvalSalRequest>();

  submitted = false;

  constructor(private srvEval:SalcalcService, private srvMsg:MessageService) { }


  public handleOnSubmit(event: Event): void {
    event.preventDefault();
    if (this.model) {
      this.evalSal.emit(this.model);
    }
  }

  newEval():void{
    this.submitted = false;
  }

  onSubmit() {
    //this.submitted = true;
    /*this.srvEval.getEvalSal(this.model).subscribe(rst => {
      this.srvMsg.add(JSON.stringify(rst));
    });*/

    //reset the variable

    /*


    let payDetail= new EvalSalPayDetail();

    this.payPeriod.pay_freq='';
    this.payPeriod.pay_detail=payDetail;


    this.payYear.pay_freq='';
    this.payYear.pay_detail=payDetail;

    //Call the service
    this.srvEval.getEvalSal2(this.model).subscribe(rst => {
      //this.srvMsg.add(JSON.stringify(rst));



      const json_obj =JSON.parse(JSON.stringify(rst));


      this.srvMsg.add("\n\n"+this.model.pay_freq);
      //payDetail= JSON.parse(JSON.stringify(json_obj['body'][this.model.pay_freq]));
      this.payPeriod.pay_freq=this.model.pay_freq;
      this.payPeriod.pay_detail = json_obj['body'][this.model.pay_freq];

      //Pay Annual
      this.payYear.pay_freq='annual';
      this.payYear.pay_detail=json_obj['body']['annual'];


    },
    (err) => {console.warn('This is API return error ->',err)});*/


  }

  getInitConf(){

    this.srvEval.getEvalSalInitConfig().subscribe(rst => {
      const json_obj =JSON.parse(JSON.stringify(rst));
      this.status_m =json_obj['body']['status_m'];
      this.pay_freqs =json_obj['body']['pay_freq'];
      this.rate_freqs = json_obj['body']['rate_freq'];

      this.srvMsg.add(JSON.stringify(this.status_m));
      this.srvMsg.add(JSON.stringify(this.pay_freqs));
      this.srvMsg.add(JSON.stringify(this.rate_freqs));
    },
    (err) => {console.warn('This is API return error ->',err)});
  }



}
