import { Component, OnInit } from '@angular/core';

import { EvalSalRequest } from '../evalSalRequest';
import {SalcalcService} from '../salcalc.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-eval-sal-form',
  templateUrl: './eval-sal-form.component.html',
  styleUrls: ['./eval-sal-form.component.css']
})
export class EvalSalFormComponent implements OnInit {

  selfEmp = ['Yes', 'No'];


  model = new EvalSalRequest(1,50,'single','bimonth');
  status_m ={};
  pay_freqs ={};
  rate_freqs = {}

  submitted = false;

  constructor(private srvEval:SalcalcService, private srvMsg:MessageService) { }

  ngOnInit(): void {
    this.getInitConf()
  }

  newEval():void{
    this.submitted = false;
  }

  onSubmit() {
    //this.submitted = true;
    /*this.srvEval.getEvalSal(this.model).subscribe(rst => {
      this.srvMsg.add(JSON.stringify(rst));
    });*/

    this.srvEval.getEvalSal2(this.model).subscribe(rst => {
      this.srvMsg.add(JSON.stringify(rst));
    },
    (err) => {console.warn('This is API return error ->',err)});


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
