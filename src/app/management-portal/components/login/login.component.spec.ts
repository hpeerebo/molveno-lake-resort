import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPortalLoginComponent } from './login.component';

describe('ManagementPortalLoginComponent', () => {
  let component: ManagementPortalLoginComponent;
  let fixture: ComponentFixture<ManagementPortalLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementPortalLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementPortalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
