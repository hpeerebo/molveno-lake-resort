import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerechtenDetailsComponent } from './gerechten-details.component';

describe('GerechtenDetailsComponent', () => {
  let component: GerechtenDetailsComponent;
  let fixture: ComponentFixture<GerechtenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerechtenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerechtenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
