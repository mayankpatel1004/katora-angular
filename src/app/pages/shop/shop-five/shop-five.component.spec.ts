import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFiveComponent } from './shop-five.component';

describe('ShopFiveComponent', () => {
  let component: ShopFiveComponent;
  let fixture: ComponentFixture<ShopFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
