import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteitReserveringenComponent } from './activiteit-reserveringen.component';

describe('ActiviteitReserveringenComponent', () => {
  let component: ActiviteitReserveringenComponent;
  let fixture: ComponentFixture<ActiviteitReserveringenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteitReserveringenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteitReserveringenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
