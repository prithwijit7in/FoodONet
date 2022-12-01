import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminVendorListComponent } from './superadmin-vendor-list.component';

describe('SuperadminVendorListComponent', () => {
  let component: SuperadminVendorListComponent;
  let fixture: ComponentFixture<SuperadminVendorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminVendorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminVendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
