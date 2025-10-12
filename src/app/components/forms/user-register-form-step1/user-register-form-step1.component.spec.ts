import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterFormStep1Component } from './user-register-form-step1.component';

describe('UserRegisterFormStep1Component', () => {
  let component: UserRegisterFormStep1Component;
  let fixture: ComponentFixture<UserRegisterFormStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegisterFormStep1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegisterFormStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
