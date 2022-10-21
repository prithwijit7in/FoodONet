import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSignupCompleteComponent } from './vendor-signup-complete.component';

describe('VendorSignupCompleteComponent', () => {
  let component: VendorSignupCompleteComponent;
  let fixture: ComponentFixture<VendorSignupCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSignupCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorSignupCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
