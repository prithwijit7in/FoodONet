import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSignupStep1Component } from './vendor-signup-step1.component';

describe('VendorSignupStep1Component', () => {
  let component: VendorSignupStep1Component;
  let fixture: ComponentFixture<VendorSignupStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSignupStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorSignupStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
