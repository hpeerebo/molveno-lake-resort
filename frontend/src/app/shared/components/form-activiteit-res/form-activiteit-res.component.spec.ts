import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActiviteitResComponent } from './form-activiteit-res.component';

describe('FormActiviteitComponent', () => {
  let component: FormActiviteitResComponent;
  let fixture: ComponentFixture<FormActiviteitResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActiviteitResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActiviteitResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
