import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPortalTafelsComponent } from './tafels.component';

describe('ManagementPortalTafelsComponent', () => {
  let component: ManagementPortalTafelsComponent;
  let fixture: ComponentFixture<ManagementPortalTafelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementPortalTafelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementPortalTafelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
