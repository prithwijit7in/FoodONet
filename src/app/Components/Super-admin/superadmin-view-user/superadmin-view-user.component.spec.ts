import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminViewUserComponent } from './superadmin-view-user.component';

describe('SuperadminViewUserComponent', () => {
  let component: SuperadminViewUserComponent;
  let fixture: ComponentFixture<SuperadminViewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminViewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
