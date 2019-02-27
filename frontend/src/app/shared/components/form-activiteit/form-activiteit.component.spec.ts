import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActiviteitComponent } from './form-activiteit.component';

describe('FormActiviteitComponent', () => {
  let component: FormActiviteitComponent;
  let fixture: ComponentFixture<FormActiviteitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActiviteitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActiviteitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
