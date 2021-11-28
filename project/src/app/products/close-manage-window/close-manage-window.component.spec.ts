import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseManageWindowComponent } from './close-manage-window.component';

describe('CloseManageWindowComponent', () => {
  let component: CloseManageWindowComponent;
  let fixture: ComponentFixture<CloseManageWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseManageWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseManageWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
