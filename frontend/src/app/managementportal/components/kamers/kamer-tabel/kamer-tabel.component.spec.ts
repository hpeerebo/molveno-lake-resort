import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamerTabelComponent } from './kamer-tabel.component';

describe('KamerTabelComponent', () => {
  let component: KamerTabelComponent;
  let fixture: ComponentFixture<KamerTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamerTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamerTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
