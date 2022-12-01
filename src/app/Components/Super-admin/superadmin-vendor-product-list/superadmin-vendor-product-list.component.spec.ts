import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminVendorProductListComponent } from './superadmin-vendor-product-list.component';

describe('SuperadminVendorProductListComponent', () => {
  let component: SuperadminVendorProductListComponent;
  let fixture: ComponentFixture<SuperadminVendorProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminVendorProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminVendorProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
