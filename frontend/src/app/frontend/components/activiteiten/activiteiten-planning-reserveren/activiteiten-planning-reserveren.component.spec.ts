import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteitenPlanningReserverenComponent } from './activiteiten-planning-reserveren.component';

describe('ActiviteitenPlanningReserverenComponent', () => {
  let component: ActiviteitenPlanningReserverenComponent;
  let fixture: ComponentFixture<ActiviteitenPlanningReserverenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteitenPlanningReserverenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteitenPlanningReserverenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
