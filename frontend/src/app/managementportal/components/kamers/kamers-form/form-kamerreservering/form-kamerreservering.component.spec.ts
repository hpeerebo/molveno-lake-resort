import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKamerreserveringComponent } from './form-kamerreservering.component';

describe('FormKamerreserveringComponent', () => {
  let component: FormKamerreserveringComponent;
  let fixture: ComponentFixture<FormKamerreserveringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormKamerreserveringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKamerreserveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
