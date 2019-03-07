import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKamerreserveringdetailsComponent } from './form-kamerreserveringdetails.component';

describe('FormKamerreserveringDetailsComponent', () => {
  let component: FormKamerreserveringdetailsComponent;
  let fixture: ComponentFixture<FormKamerreserveringdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormKamerreserveringdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKamerreserveringdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
