import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalSalPayDetailsComponent } from './eval-sal-pay-details.component';

describe('EvalSalPayDetailsComponent', () => {
  let component: EvalSalPayDetailsComponent;
  let fixture: ComponentFixture<EvalSalPayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalSalPayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalSalPayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
