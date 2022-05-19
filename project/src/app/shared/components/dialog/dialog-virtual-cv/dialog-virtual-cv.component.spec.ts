import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVirtualCvComponent } from './dialog-virtual-cv.component';

describe('DialogVirtualCvComponent', () => {
  let component: DialogVirtualCvComponent;
  let fixture: ComponentFixture<DialogVirtualCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVirtualCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVirtualCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
