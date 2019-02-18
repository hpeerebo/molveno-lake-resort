import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerechtenComponent } from './gerechten.component';

describe('GerechtenComponent', () => {
  let component: GerechtenComponent;
  let fixture: ComponentFixture<GerechtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerechtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerechtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
