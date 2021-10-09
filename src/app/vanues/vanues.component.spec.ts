import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanuesComponent } from './vanues.component';

describe('VanuesComponent', () => {
  let component: VanuesComponent;
  let fixture: ComponentFixture<VanuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
