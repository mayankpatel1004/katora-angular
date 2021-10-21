import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTwoComponent } from './contact-two.component';

describe('ContactTwoComponent', () => {
  let component: ContactTwoComponent;
  let fixture: ComponentFixture<ContactTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
