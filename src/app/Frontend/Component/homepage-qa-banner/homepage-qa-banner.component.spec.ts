import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageQABannerComponent } from './homepage-qa-banner.component';

describe('HomepageQABannerComponent', () => {
  let component: HomepageQABannerComponent;
  let fixture: ComponentFixture<HomepageQABannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageQABannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageQABannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
