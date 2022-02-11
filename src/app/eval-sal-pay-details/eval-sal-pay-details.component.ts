import { Component, OnInit, Input } from '@angular/core';
import {EmpData} from '../empData';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {SalcalcService} from '../salcalc.service';
import { MessageService } from '../message.service';
import {EvalSalPay, EvalSalPayDetail} from '../eval-sal-pay';



@Component({
  selector: 'app-eval-sal-pay-details',
  templateUrl: './eval-sal-pay-details.component.html',
  styleUrls: ['./eval-sal-pay-details.component.css']
})
export class EvalSalPayDetailsComponent implements OnInit {

  @Input() model?:EvalSalPay;
  showDetails = false;
  imgPath = 'assets/img';

  constructor() { }

  ngOnInit(): void {

  }



  expandView():boolean{

    this.showDetails= !this.showDetails;
    return this.showDetails;
  }

}
