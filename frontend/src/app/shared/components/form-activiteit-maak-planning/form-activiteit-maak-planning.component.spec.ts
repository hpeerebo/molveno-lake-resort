import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActiviteitMaakPlanningComponent } from './form-activiteit-maak-planning.component';

describe('FormActiviteitMaakPlanningComponent', () => {
  let component: FormActiviteitMaakPlanningComponent;
  let fixture: ComponentFixture<FormActiviteitMaakPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActiviteitMaakPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActiviteitMaakPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
