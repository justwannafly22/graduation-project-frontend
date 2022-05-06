import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMastersComponent } from './main-masters.component';

describe('MainMastersComponent', () => {
  let component: MainMastersComponent;
  let fixture: ComponentFixture<MainMastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMastersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
