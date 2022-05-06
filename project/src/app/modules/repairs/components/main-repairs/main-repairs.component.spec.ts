import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRepairsComponent } from './main-repairs.component';

describe('MainRepairsComponent', () => {
  let component: MainRepairsComponent;
  let fixture: ComponentFixture<MainRepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRepairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
