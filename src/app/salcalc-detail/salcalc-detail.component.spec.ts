import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalcalcDetailComponent } from './salcalc-detail.component';

describe('SalcalcDetailComponent', () => {
  let component: SalcalcDetailComponent;
  let fixture: ComponentFixture<SalcalcDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalcalcDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalcalcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
