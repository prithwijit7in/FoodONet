import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminAddUserComponent } from './superadmin-add-user.component';

describe('SuperadminAddUserComponent', () => {
  let component: SuperadminAddUserComponent;
  let fixture: ComponentFixture<SuperadminAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminAddUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
