import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndLoginComponent } from './login.component';

describe('BackEndLoginComponent', () => {
  let component: BackEndLoginComponent;
  let fixture: ComponentFixture<BackEndLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
