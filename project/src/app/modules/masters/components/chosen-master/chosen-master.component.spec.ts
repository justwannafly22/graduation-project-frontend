import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenMasterComponent } from './chosen-master.component';

describe('ChosenMasterComponent', () => {
  let component: ChosenMasterComponent;
  let fixture: ComponentFixture<ChosenMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
