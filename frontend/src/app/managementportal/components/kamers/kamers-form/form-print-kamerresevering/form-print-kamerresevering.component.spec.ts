import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrintKamerreseveringComponent } from './form-print-kamerresevering.component';

describe('FormPrintKamerreseveringComponent', () => {
  let component: FormPrintKamerreseveringComponent;
  let fixture: ComponentFixture<FormPrintKamerreseveringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrintKamerreseveringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrintKamerreseveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
