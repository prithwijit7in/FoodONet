import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageOfferZoneComponent } from './homepage-offer-zone.component';

describe('HomepageOfferZoneComponent', () => {
  let component: HomepageOfferZoneComponent;
  let fixture: ComponentFixture<HomepageOfferZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageOfferZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageOfferZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
