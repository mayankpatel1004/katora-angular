import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopThreeComponent } from './shop-three.component';

describe('ShopThreeComponent', () => {
  let component: ShopThreeComponent;
  let fixture: ComponentFixture<ShopThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
