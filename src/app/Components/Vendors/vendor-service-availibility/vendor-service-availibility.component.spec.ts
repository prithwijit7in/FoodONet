import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorServiceAvailibilityComponent } from './vendor-service-availibility.component';

describe('VendorServiceAvailibilityComponent', () => {
  let component: VendorServiceAvailibilityComponent;
  let fixture: ComponentFixture<VendorServiceAvailibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorServiceAvailibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorServiceAvailibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
