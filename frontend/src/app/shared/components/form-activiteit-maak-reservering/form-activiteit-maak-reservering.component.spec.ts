import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActiviteitMaakReserveringComponent } from './form-activiteit-maak-reservering.component';

describe('FormActiviteitMaakReserveringComponent', () => {
  let component: FormActiviteitMaakReserveringComponent;
  let fixture: ComponentFixture<FormActiviteitMaakReserveringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActiviteitMaakReserveringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActiviteitMaakReserveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
