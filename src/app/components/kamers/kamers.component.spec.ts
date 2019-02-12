import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamersComponent } from './kamers.component';

describe('KamersComponent', () => {
  let component: KamersComponent;
  let fixture: ComponentFixture<KamersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
