import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndRestaurantComponent } from './restaurant.component';

describe('BackEndRestaurantComponent', () => {
  let component: BackEndRestaurantComponent;
  let fixture: ComponentFixture<BackEndRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
