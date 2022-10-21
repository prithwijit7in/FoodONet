import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSecurityCodeComponent } from './login-security-code.component';

describe('LoginSecurityCodeComponent', () => {
  let component: LoginSecurityCodeComponent;
  let fixture: ComponentFixture<LoginSecurityCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSecurityCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSecurityCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
