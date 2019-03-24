import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmailKamerreseveringComponent } from './form-email-kamerresevering.component';

describe('FormEmailKamerreseveringComponent', () => {
  let component: FormEmailKamerreseveringComponent;
  let fixture: ComponentFixture<FormEmailKamerreseveringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmailKamerreseveringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmailKamerreseveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
