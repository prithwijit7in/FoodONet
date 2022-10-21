import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSignupDocumentUploadComponent } from './vendor-signup-document-upload.component';

describe('VendorSignupDocumentUploadComponent', () => {
  let component: VendorSignupDocumentUploadComponent;
  let fixture: ComponentFixture<VendorSignupDocumentUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSignupDocumentUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorSignupDocumentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
