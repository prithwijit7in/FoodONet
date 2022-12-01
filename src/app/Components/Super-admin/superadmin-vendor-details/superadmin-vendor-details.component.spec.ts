import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminVendorDetailsComponent } from './superadmin-vendor-details.component';

describe('SuperadminVendorDetailsComponent', () => {
  let component: SuperadminVendorDetailsComponent;
  let fixture: ComponentFixture<SuperadminVendorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminVendorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminVendorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
