import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {of} from 'rxjs';

import { SalcalcService } from './salcalc.service';
import { MessageService } from './message.service';

fdescribe('SalcalcService', () => {
  let service: SalcalcService;
  let srvMsg: jasmine.SpyObj<MessageService>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MessageService',['add','clear']);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post','put','update','options']);

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [
        SalcalcService,
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: MessageService, useValue: spy }
    ]
    });
    service = TestBed.inject(SalcalcService);
    srvMsg = TestBed.inject(MessageService) as jasmine.SpyObj<MessageService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getUpper should return Upper CASE', () => {
    expect(service.getUpper("Simple Test"))
    .withContext('service to return Upper case')
    .toBe("SIMPLE TEST");
  });


  //Testing getEvalSalInitConfig Normal
  it('#getEvalSalInitConfig should return Init Config', (done: DoneFn) => {

    const expectedDict = {
      "statusCode": 200,
      "headers": {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
      },
      "body": {
          "status_m": {
              "single": "Single",
              "marriedj": "Married Filling join",
              "marrieds": "Married Filling seperate",
              "headh": "Head of Household",
              "widow": "Widow"
          },
          "pay_freq": {
              "weekly": "Weekly",
              "otherweek": "Other Week",
              "bimonth": "Bi-Monthly",
              "month": "Monthly",
              "widow": "Widow"
          },
          "rate_freq": {
              "Year": 1,
              "Hour": 0
          },
          "rate_freq2": {
              "hour": "Hour",
              "day": "Day",
              "week": "Week",
              "otherweek": "Other Week",
              "bimonth": "Bi-Monthly",
              "month": "Monthly"
          },
          "sstax_rate": 0.062,
          "max_sstax": 142800,
          "mcare_max_tax_single": 200000,
          "mcare_max_tax_mariedj": 250000,
          "mcare_rate": 0.0145,
          "mcare_extra_rate": 0.009,
          "max_taxable_2020": 137700,
          "max_taxable_2021": 142800,
          "extra_rate_over_normal_medic": 0.9,
          "max_normal_medic_rate_single": 200000,
          "max_normal_medic_rate_marriedj": 250000,
          "ss_tax_rate": 12.4,
          "medic_tax_rate": 2.9
      }
  }

    httpClientSpy.post.and.returnValue(of(expectedDict));

    service.getEvalSalInitConfig().subscribe({
      next: confData => {
        console.log(confData);
        expect(confData)
          .withContext('expected Config Data')
          .toEqual(expectedDict);
        done();
      },
      error: done.fail
    });


    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  //Testing getEvalSalInitConfig 404
  it('#getEvalSalInitConfig should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.post.and.returnValue(of(errorResponse));

    service.getEvalSalInitConfig().subscribe({
      next: confData =>{
        console.log('Return from should fail ->',confData);
        //convert to an key pair array
        let result = JSON.parse(JSON.stringify(confData));
        expect(result['status']).toBe(404);
        expect(result.message).toContain('Not Found');

        done();
         },
      error: error  => {
        console.warn('Return from should fail error ->',error);
        expect(error.message).toContain('test 404 error');
        done();
      }
    });
  });



});
