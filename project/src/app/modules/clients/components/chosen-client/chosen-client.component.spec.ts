import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenClientComponent } from './chosen-client.component';

describe('ChosenClientComponent', () => {
  let component: ChosenClientComponent;
  let fixture: ComponentFixture<ChosenClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
