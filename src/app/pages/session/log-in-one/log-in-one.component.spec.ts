import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInOneComponent } from './log-in-one.component';

describe('LogInOneComponent', () => {
  let component: LogInOneComponent;
  let fixture: ComponentFixture<LogInOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
