import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKamerreseveringDetailsComponent } from './form-kamerresevering-details.component';

describe('FormKamerreseveringDetailsComponent', () => {
  let component: FormKamerreseveringDetailsComponent;
  let fixture: ComponentFixture<FormKamerreseveringDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormKamerreseveringDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKamerreseveringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
