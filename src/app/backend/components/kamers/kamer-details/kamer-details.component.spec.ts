import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamerDetailsComponent } from './kamer-details.component';

describe('KamerDetailsComponent', () => {
  let component: KamerDetailsComponent;
  let fixture: ComponentFixture<KamerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
