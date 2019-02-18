import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamersFormComponent } from './kamers-form.component';

describe('KamersFormComponent', () => {
  let component: KamersFormComponent;
  let fixture: ComponentFixture<KamersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
