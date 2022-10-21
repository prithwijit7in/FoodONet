import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRegistrationCompleteComponent } from './vendor-registration-complete.component';

describe('VendorRegistrationCompleteComponent', () => {
  let component: VendorRegistrationCompleteComponent;
  let fixture: ComponentFixture<VendorRegistrationCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorRegistrationCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorRegistrationCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
