import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteitenFormComponent } from './activiteiten-form.component';

describe('ActiviteitenFormComponent', () => {
  let component: ActiviteitenFormComponent;
  let fixture: ComponentFixture<ActiviteitenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteitenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteitenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
