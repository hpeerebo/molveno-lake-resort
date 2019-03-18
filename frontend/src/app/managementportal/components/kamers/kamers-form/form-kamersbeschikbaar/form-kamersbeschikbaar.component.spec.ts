import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKamersbeschikbaarComponent } from './form-kamersbeschikbaar.component';

describe('FormKamersbeschikbaarComponent', () => {
  let component: FormKamersbeschikbaarComponent;
  let fixture: ComponentFixture<FormKamersbeschikbaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormKamersbeschikbaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKamersbeschikbaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
