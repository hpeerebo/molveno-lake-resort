import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActiviteitplanningComponent } from './form-activiteitplanning.component';

describe('FormActiviteitplanningComponent', () => {
  let component: FormActiviteitplanningComponent;
  let fixture: ComponentFixture<FormActiviteitplanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActiviteitplanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActiviteitplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
