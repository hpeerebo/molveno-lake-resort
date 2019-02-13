import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndActiviteitenComponent } from './activiteiten.component';

describe('BackEndActiviteitenComponent', () => {
  let component: BackEndActiviteitenComponent;
  let fixture: ComponentFixture<BackEndActiviteitenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndActiviteitenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndActiviteitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
