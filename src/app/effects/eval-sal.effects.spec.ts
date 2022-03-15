import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EvalSalEffects } from './eval-sal.effects';

describe('EvalSalEffects', () => {
  let actions$: Observable<any>;
  let effects: EvalSalEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EvalSalEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EvalSalEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
