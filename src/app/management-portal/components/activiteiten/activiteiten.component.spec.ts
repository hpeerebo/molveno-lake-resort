import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPortalActiviteitenComponent } from './activiteiten.component';

describe('ManagementPortalActiviteitenComponent', () => {
  let component: ManagementPortalActiviteitenComponent;
  let fixture: ComponentFixture<ManagementPortalActiviteitenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementPortalActiviteitenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementPortalActiviteitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
