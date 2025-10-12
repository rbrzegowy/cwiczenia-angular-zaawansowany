import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterFormStep2Component } from './user-register-form-step2.component';

describe('UserRegisterFormStep2Component', () => {
  let component: UserRegisterFormStep2Component;
  let fixture: ComponentFixture<UserRegisterFormStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegisterFormStep2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegisterFormStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
