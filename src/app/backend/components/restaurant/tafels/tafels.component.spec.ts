import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafelsComponent } from './tafels.component';

describe('TafelsComponent', () => {
  let component: TafelsComponent;
  let fixture: ComponentFixture<TafelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
