import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFourComponent } from './shop-four.component';

describe('ShopFourComponent', () => {
  let component: ShopFourComponent;
  let fixture: ComponentFixture<ShopFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
