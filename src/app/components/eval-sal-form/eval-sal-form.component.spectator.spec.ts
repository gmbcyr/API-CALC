import { Spectator, createComponentFactory,mockProvider, byTestId } from '@ngneat/spectator';
import { MockComponents } from 'ng-mocks';
import { of } from 'rxjs';
import {FormsModule,ReactiveFormsModule,NgForm} from '@angular/forms';
import { theInit,Statuses,pay_freqs,rate_freqs } from '../../spec-helpers/eval-sal.spec-helper';

import { EvalSalRequest } from '../../models/evalSalRequest';
import {SalcalcService} from '../../services/salcalc.service';
import { MessageService } from '../../services/message.service';
import {EvalSalPayDetail,EvalSalPay} from '../../models/eval-sal-pay';

import { EvalSalFormComponent } from './eval-sal-form.component';

fdescribe('EvalSalFormComponent with spectator', () => {
  let spectator: Spectator<EvalSalFormComponent>;

  const createComponent = createComponentFactory({
    component: EvalSalFormComponent,
    shallow: true,
    providers: [mockProvider(SalcalcService),mockProvider(MessageService)],
    imports: [
      ReactiveFormsModule,FormsModule
    ],
  });

  beforeEach(() => {
    spectator = createComponent();

    spectator.inject(SalcalcService).getEvalSalInitConfig.and.returnValue(of(theInit));
  });

  it('starts with proper init values', () => {
    //let actualSearchTerm: string | undefined;



    /*spectator.component.search.subscribe((otherSearchTerm: string) => {
      actualSearchTerm = otherSearchTerm;
    });

    spectator.typeInElement(searchTerm, byTestId('search-term-input'));

    spectator.dispatchFakeEvent(byTestId('form'), 'submit');

    expect(actualSearchTerm).toBe(searchTerm);*/

      expect(spectator.component.submitted)
        .withContext('Status must be empty at starting')
        .toBe(false);

        expect(spectator.component.status_m)
        .withContext('Status must be empty at starting')
        .toEqual({});

      expect(spectator.component.pay_freqs)
      .withContext('pay_freqs must be empty at starting')
      .toEqual({});

      expect(spectator.component.rate_freqs)
      .withContext('rate_freqs must be empty at starting')
      .toEqual({});

      expect(spectator.component.payPeriod)
      .withContext('rate_freqs must be empty at starting')
      .toEqual(new EvalSalPay());

      expect(spectator.component.payYear)
      .withContext('rate_freqs must be empty at starting')
      .toEqual(new EvalSalPay());

      expect(spectator.component.selfEmp)
      .withContext('rate_freqs must be empty at starting')
      .toEqual(['Yes', 'No']);

      expect(spectator.component.model)
      .withContext('rate_freqs must be empty at starting')
      .toEqual(new EvalSalRequest(1,50,'single','bimonth'));

  });

  it('has correct config values', () => {


    //spectator.component.ngOnInit();
    spectator.component.getInitConf();

    spectator.detectChanges();

    const srv=spectator.inject(SalcalcService);
    expect(srv.getEvalSalInitConfig)
    .withContext('getEvalSalInitConfig has been called')
    .toHaveBeenCalled();

    expect(spectator.component.status_m)
    .withContext('Status must be filled after starting')
    .toEqual(Statuses);

  expect(spectator.component.pay_freqs)
  .withContext('pay_freqs must be filled after starting')
  .toEqual(pay_freqs);

  expect(spectator.component.rate_freqs)
  .withContext('rate_freqs must be filled after starting')
  .toEqual(rate_freqs);

  });




});
