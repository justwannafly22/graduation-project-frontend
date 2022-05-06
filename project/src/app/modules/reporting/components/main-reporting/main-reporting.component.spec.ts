import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReportingComponent } from './main-reporting.component';

describe('MainReportingComponent', () => {
  let component: MainReportingComponent;
  let fixture: ComponentFixture<MainReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainReportingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
