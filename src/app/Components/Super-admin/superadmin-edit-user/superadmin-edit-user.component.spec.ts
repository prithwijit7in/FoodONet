import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminEditUserComponent } from './superadmin-edit-user.component';

describe('SuperadminEditUserComponent', () => {
  let component: SuperadminEditUserComponent;
  let fixture: ComponentFixture<SuperadminEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminEditUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
