import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTwoComponent } from './shop-two.component';

describe('ShopTwoComponent', () => {
  let component: ShopTwoComponent;
  let fixture: ComponentFixture<ShopTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
