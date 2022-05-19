import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaaComponent } from './personal-areaa.component';

describe('PersonalAreaaComponent', () => {
  let component: PersonalAreaaComponent;
  let fixture: ComponentFixture<PersonalAreaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAreaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
