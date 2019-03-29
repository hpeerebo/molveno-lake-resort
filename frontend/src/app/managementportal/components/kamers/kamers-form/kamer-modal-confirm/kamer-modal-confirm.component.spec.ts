import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamerModalConfirmComponent } from './kamer-modal-confirm.component';

describe('KamerModalConfirmComponent', () => {
  let component: KamerModalConfirmComponent;
  let fixture: ComponentFixture<KamerModalConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamerModalConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamerModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
