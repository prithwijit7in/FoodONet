import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageJustInComponent } from './homepage-just-in.component';

describe('HomepageJustInComponent', () => {
  let component: HomepageJustInComponent;
  let fixture: ComponentFixture<HomepageJustInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageJustInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageJustInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
