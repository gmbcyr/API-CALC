import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalSalFormComponent } from './eval-sal-form.component';

describe('EvalSalFormComponent', () => {
  let component: EvalSalFormComponent;
  let fixture: ComponentFixture<EvalSalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalSalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalSalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
