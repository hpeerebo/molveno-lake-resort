import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: BackEndHomeComponent;
  let fixture: ComponentFixture<BackEndHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
