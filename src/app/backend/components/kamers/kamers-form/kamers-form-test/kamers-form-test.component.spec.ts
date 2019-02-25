import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamersFormTestComponent } from './kamers-form-test.component';

describe('KamersFormTestComponent', () => {
  let component: KamersFormTestComponent;
  let fixture: ComponentFixture<KamersFormTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamersFormTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamersFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
