import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCategorySliderComponent } from './homepage-category-slider.component';

describe('HomepageCategorySliderComponent', () => {
  let component: HomepageCategorySliderComponent;
  let fixture: ComponentFixture<HomepageCategorySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageCategorySliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageCategorySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
