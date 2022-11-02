import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminResetUserPasswordComponent } from './superadmin-reset-user-password.component';

describe('SuperadminResetUserPasswordComponent', () => {
  let component: SuperadminResetUserPasswordComponent;
  let fixture: ComponentFixture<SuperadminResetUserPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminResetUserPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminResetUserPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
