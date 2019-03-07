import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamerreserveringComponent } from './kamerreservering.component';

describe('KamerreserveringComponent', () => {
  let component: KamerreserveringComponent;
  let fixture: ComponentFixture<KamerreserveringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamerreserveringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamerreserveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
