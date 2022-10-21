import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSignupBankDetailsComponent } from './vendor-signup-bank-details.component';

describe('VendorSignupBankDetailsComponent', () => {
  let component: VendorSignupBankDetailsComponent;
  let fixture: ComponentFixture<VendorSignupBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSignupBankDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorSignupBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
