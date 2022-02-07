import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalcalcComponent } from './salcalc.component';

describe('SalcalcComponent', () => {
  let component: SalcalcComponent;
  let fixture: ComponentFixture<SalcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalcalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
