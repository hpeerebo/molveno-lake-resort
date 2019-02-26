import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTafelComponent } from './form-tafel.component';

describe('FormTafelsComponent', () => {
  let component: FormTafelComponent;
  let fixture: ComponentFixture<FormTafelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTafelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTafelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
