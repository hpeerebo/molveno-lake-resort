import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteitenPlanningComponent } from './activiteiten-planning.component';

describe('ActiviteitenPlanningComponent', () => {
  let component: ActiviteitenPlanningComponent;
  let fixture: ComponentFixture<ActiviteitenPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteitenPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteitenPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
