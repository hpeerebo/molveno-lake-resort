import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPortalKamersComponent } from './kamers.component';

describe('ManagementPortalKamersComponent', () => {
  let component: ManagementPortalKamersComponent;
  let fixture: ComponentFixture<ManagementPortalKamersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementPortalKamersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementPortalKamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
