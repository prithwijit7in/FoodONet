import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFavBrandComponent } from './homepage-fav-brand.component';

describe('HomepageFavBrandComponent', () => {
  let component: HomepageFavBrandComponent;
  let fixture: ComponentFixture<HomepageFavBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageFavBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageFavBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
