import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalSalComponent } from './eval-sal.component';

describe('EvalSalComponent', () => {
  let component: EvalSalComponent;
  let fixture: ComponentFixture<EvalSalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalSalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalSalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
