import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSignupContactDetailsLIComponent } from './vendor-signup-contact-details-li.component';

describe('VendorSignupContactDetailsLIComponent', () => {
  let component: VendorSignupContactDetailsLIComponent;
  let fixture: ComponentFixture<VendorSignupContactDetailsLIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSignupContactDetailsLIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorSignupContactDetailsLIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
