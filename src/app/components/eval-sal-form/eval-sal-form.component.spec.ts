import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { EvalSalFormComponent } from './eval-sal-form.component';
import { theInit } from '../../spec-helpers/eval-sal.spec-helper';

import { SalcalcService } from '../../services/salcalc.service';
import { MessageService } from '../../services/message.service';

class MockSrvSalCal {
  salCalcUrl = 'api/emps';  // URL to web api
  evalSalUrl = 'https://dofxdxglq8.execute-api.us-east-1.amazonaws.com/Test/eval-sal';
  evalSalUrl_self = 'https://dofxdxglq8.execute-api.us-east-1.amazonaws.com/Test/eval-sal-self-emp';



  getEvalSalInitConfig(){

    return theInit;
  }
}

class MockSrvMsg {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

describe('EvalSalFormComponent', () => {
  let comp: EvalSalFormComponent;
  let fixture: ComponentFixture<EvalSalFormComponent>;

  let srvCalc: SalcalcService;
  let srvMsg: MessageService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[EvalSalFormComponent],
      providers: [
        SalcalcService,MessageService],
      /*providers: [
        EvalSalFormComponent,
        {provide: SalcalcService,useClass:MockSrvSalCal},
        {provide: SalcalcService,useValue:MockSrvSalCal},
        {provide: MessageService,useClass:MockSrvMsg} ],*/
        imports: [
          ReactiveFormsModule,FormsModule
        ]
    }).compileComponents();
    fixture = TestBed.createComponent(EvalSalFormComponent);
    comp =  fixture.componentInstance;
    fixture.detectChanges();
    /*comp = TestBed.inject(EvalSalFormComponent);
    srvCalc = TestBed.inject(SalcalcService);
    srvMsg = TestBed.inject(MessageService);*/
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalSalFormComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });


  it('#getInitConf should get the init values', () => {




    expect(comp.status_m)
      .withContext('Status must be empty at starting')
      .toEqual({});

    expect(comp.pay_freqs)
    .withContext('pay_freqs must be empty at starting')
    .toEqual({});

    expect(comp.rate_freqs)
    .withContext('rate_freqs must be empty at starting')
    .toEqual({});

    //Init the component
    //comp.ngOnInit();

    expect(comp.status_m)
      .withContext('Status must be filled after starting')
      .toEqual({
        "single": "Single",
        "marriedj": "Married Filling join",
        "marrieds": "Married Filling seperate",
        "headh": "Head of Household",
        "widow": "Widow"
    });

    expect(comp.pay_freqs)
    .withContext('pay_freqs must be filled after starting')
    .toEqual({
      "weekly": "Weekly",
      "otherweek": "Other Week",
      "bimonth": "Bi-Monthly",
      "month": "Monthly",
      "widow": "Widow"
  });

    expect(comp.rate_freqs)
    .withContext('rate_freqs must be filled after starting')
    .toEqual({
      "hour": "Hour",
      "day": "Day",
      "week": "Week",
      "otherweek": "2 Weeks",
      "bimonth": "Bi-Monthly",
      "month": "Month",
      "year": "Year"
  });


  });
});
