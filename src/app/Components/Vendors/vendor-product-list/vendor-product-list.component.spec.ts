import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProductListComponent } from './vendor-product-list.component';

describe('VendorProductListComponent', () => {
  let component: VendorProductListComponent;
  let fixture: ComponentFixture<VendorProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
