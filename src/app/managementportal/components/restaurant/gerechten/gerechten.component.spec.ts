import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPortalGerechtenComponent } from './gerechten.component';

describe('ManagementPortalGerechtenComponent', () => {
  let component: ManagementPortalGerechtenComponent;
  let fixture: ComponentFixture<ManagementPortalGerechtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementPortalGerechtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementPortalGerechtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
