import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTafelreserveringComponent } from './form-tafelreservering.component';

describe('FormTafelreserveringComponent', () => {
  let component: FormTafelreserveringComponent;
  let fixture: ComponentFixture<FormTafelreserveringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTafelreserveringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTafelreserveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
