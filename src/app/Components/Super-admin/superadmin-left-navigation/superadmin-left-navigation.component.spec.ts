import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminLeftNavigationComponent } from './superadmin-left-navigation.component';

describe('SuperadminLeftNavigationComponent', () => {
  let component: SuperadminLeftNavigationComponent;
  let fixture: ComponentFixture<SuperadminLeftNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminLeftNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminLeftNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
