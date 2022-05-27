import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenRepComponent } from './chosen-rep.component';

describe('ChosenRepComponent', () => {
  let component: ChosenRepComponent;
  let fixture: ComponentFixture<ChosenRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
