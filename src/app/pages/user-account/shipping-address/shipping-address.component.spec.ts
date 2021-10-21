import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAdressComponent } from './shipping-address.component';

describe('ShippingAdressComponent', () => {
  let component: ShippingAdressComponent;
  let fixture: ComponentFixture<ShippingAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
