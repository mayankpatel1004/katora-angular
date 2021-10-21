import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInTwoComponent } from './log-in-two.component';

describe('LogInTwoComponent', () => {
  let component: LogInTwoComponent;
  let fixture: ComponentFixture<LogInTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
