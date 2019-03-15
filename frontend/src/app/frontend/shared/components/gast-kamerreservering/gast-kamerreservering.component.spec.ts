import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastKamerReserveringComponent } from './gast-kamerreservering.component';

describe('FormKamerreserveringComponent', () => {
  let component: GastKamerReserveringComponent;
  let fixture: ComponentFixture<GastKamerReserveringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastKamerReserveringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastKamerReserveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
