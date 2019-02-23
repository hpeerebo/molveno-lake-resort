import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafelsFormComponent } from './tafels-form.component';

describe('TafelsFormComponent', () => {
  let component: TafelsFormComponent;
  let fixture: ComponentFixture<TafelsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafelsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafelsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
