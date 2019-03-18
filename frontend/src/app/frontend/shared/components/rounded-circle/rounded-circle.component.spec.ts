import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedCircleComponent } from './rounded-circle.component';

describe('RoundedCircleComponent', () => {
  let component: RoundedCircleComponent;
  let fixture: ComponentFixture<RoundedCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundedCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
