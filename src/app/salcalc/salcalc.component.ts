import { Component, OnInit } from '@angular/core';
import {EmpData} from '../empData';
import {SalcalcService} from '../salcalc.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-salcalc',
  templateUrl: './salcalc.component.html',
  styleUrls: ['./salcalc.component.css']
})
export class SalcalcComponent implements OnInit {

  name = 'Calc Emp Sal';
  theEmp: EmpData ={
    pay_r:39,
    sefl_emp:true,
    status:'single',
    pay_freq:'week'};

    theEmps: EmpData[] = [];

  constructor(private srvSal:SalcalcService,private srvMsg :MessageService) { }

  ngOnInit(): void {
    this.getEmps();
  }

  getEmps():void{
    this.srvSal.getEmps().subscribe(emps => this.theEmps=emps);
  }

  selectedEmp?: EmpData;

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    /*this.srvSal.addEmp({ name } as EmpData)
      .subscribe(em => {
        this.theEmps.push(em);
      });*/
  }


}
