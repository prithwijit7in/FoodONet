import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryLeftpanelComponent } from './product-category-leftpanel.component';

describe('ProductCategoryLeftpanelComponent', () => {
  let component: ProductCategoryLeftpanelComponent;
  let fixture: ComponentFixture<ProductCategoryLeftpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryLeftpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCategoryLeftpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
