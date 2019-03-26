import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDownloadKamerreseveringComponent } from './form-download-kamerresevering.component';

describe('FormDownloadKamerreseveringComponent', () => {
  let component: FormDownloadKamerreseveringComponent;
  let fixture: ComponentFixture<FormDownloadKamerreseveringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDownloadKamerreseveringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDownloadKamerreseveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
