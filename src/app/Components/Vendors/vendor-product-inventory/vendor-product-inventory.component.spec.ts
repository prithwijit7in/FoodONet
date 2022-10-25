import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProductInventoryComponent } from './vendor-product-inventory.component';

describe('VendorProductInventoryComponent', () => {
  let component: VendorProductInventoryComponent;
  let fixture: ComponentFixture<VendorProductInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorProductInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorProductInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
