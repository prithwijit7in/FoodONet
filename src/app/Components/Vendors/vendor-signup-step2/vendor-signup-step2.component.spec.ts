import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSignupStep2Component } from './vendor-signup-step2.component';

describe('VendorSignupStep2Component', () => {
  let component: VendorSignupStep2Component;
  let fixture: ComponentFixture<VendorSignupStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSignupStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorSignupStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
