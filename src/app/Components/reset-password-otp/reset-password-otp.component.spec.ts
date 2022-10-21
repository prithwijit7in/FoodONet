import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordOtpComponent } from './reset-password-otp.component';

describe('ResetPasswordOtpComponent', () => {
  let component: ResetPasswordOtpComponent;
  let fixture: ComponentFixture<ResetPasswordOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
