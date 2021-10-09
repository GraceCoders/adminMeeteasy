import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinetypeComponent } from './cuisinetype.component';

describe('CuisinetypeComponent', () => {
  let component: CuisinetypeComponent;
  let fixture: ComponentFixture<CuisinetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisinetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisinetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
