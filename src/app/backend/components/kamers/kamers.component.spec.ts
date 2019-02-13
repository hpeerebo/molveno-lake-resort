import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndKamersComponent } from './kamers.component';

describe('BackEndKamersComponent', () => {
  let component: BackEndKamersComponent;
  let fixture: ComponentFixture<BackEndKamersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndKamersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndKamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
