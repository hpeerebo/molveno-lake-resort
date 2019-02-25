import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPortalHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: ManagementPortalHomeComponent;
  let fixture: ComponentFixture<ManagementPortalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementPortalHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementPortalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
