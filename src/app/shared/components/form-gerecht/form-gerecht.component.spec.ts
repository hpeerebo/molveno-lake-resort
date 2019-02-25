import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGerechtComponent } from './form-gerecht.component';

describe('FormGerechtComponent', () => {
  let component: FormGerechtComponent;
  let fixture: ComponentFixture<FormGerechtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGerechtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGerechtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
