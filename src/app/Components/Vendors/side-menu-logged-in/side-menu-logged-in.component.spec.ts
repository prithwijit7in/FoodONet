import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuLoggedInComponent } from './side-menu-logged-in.component';

describe('SideMenuLoggedInComponent', () => {
  let component: SideMenuLoggedInComponent;
  let fixture: ComponentFixture<SideMenuLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuLoggedInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
