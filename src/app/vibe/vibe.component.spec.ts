import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VibeComponent } from './vibe.component';

describe('VibeComponent', () => {
  let component: VibeComponent;
  let fixture: ComponentFixture<VibeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
