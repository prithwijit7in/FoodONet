import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSignupLegalInfoComponent } from './vendor-signup-legal-info.component';

describe('VendorSignupLegalInfoComponent', () => {
  let component: VendorSignupLegalInfoComponent;
  let fixture: ComponentFixture<VendorSignupLegalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSignupLegalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorSignupLegalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
