import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageReviewComponent } from './homepage-review.component';

describe('HomepageReviewComponent', () => {
  let component: HomepageReviewComponent;
  let fixture: ComponentFixture<HomepageReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
