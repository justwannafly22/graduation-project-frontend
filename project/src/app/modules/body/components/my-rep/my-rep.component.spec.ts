import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRepComponent } from './my-rep.component';

describe('MyRepComponent', () => {
  let component: MyRepComponent;
  let fixture: ComponentFixture<MyRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
