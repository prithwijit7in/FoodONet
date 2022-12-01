import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminSearchVendorComponent } from './superadmin-search-vendor.component';

describe('SuperadminSearchVendorComponent', () => {
  let component: SuperadminSearchVendorComponent;
  let fixture: ComponentFixture<SuperadminSearchVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminSearchVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminSearchVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
