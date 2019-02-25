import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPortalIngredientenComponent } from './ingredienten.component';

describe('ManagementPortalIngredientenComponent', () => {
  let component: ManagementPortalIngredientenComponent;
  let fixture: ComponentFixture<ManagementPortalIngredientenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementPortalIngredientenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementPortalIngredientenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
