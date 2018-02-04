import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasClockComponent } from './canvas-clock.component';

describe('CanvasClockComponent', () => {
  let component: CanvasClockComponent;
  let fixture: ComponentFixture<CanvasClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
