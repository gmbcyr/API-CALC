import { Component, OnInit, Input } from '@angular/core';
import {EmpData} from '../empData';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {SalcalcService} from '../salcalc.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-salcalc-detail',
  templateUrl: './salcalc-detail.component.html',
  styleUrls: ['./salcalc-detail.component.css']
})
export class SalcalcDetailComponent implements OnInit {

  @Input() emp?:EmpData;

  constructor(private route:ActivatedRoute, private location: Location,private srvCal:SalcalcService) { }

  ngOnInit(): void {
    this.getEmp();
  }

  getEmp():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.srvCal.getEmp(id).subscribe(em => this.emp = em);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.emp) {
      this.srvCal.updateEmp(this.emp)
        .subscribe(() => this.goBack());
    }
  }

}
