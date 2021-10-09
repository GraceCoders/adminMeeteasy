import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceperheadComponent } from './priceperhead.component';

describe('PriceperheadComponent', () => {
  let component: PriceperheadComponent;
  let fixture: ComponentFixture<PriceperheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceperheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceperheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
