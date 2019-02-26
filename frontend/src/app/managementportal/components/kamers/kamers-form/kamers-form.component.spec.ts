import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPortalKamersFormComponent } from './kamers-form.component';

describe('ManagementPortalKamersFormComponent', () => {
  let component: ManagementPortalKamersFormComponent;
  let fixture: ComponentFixture<ManagementPortalKamersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementPortalKamersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementPortalKamersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
