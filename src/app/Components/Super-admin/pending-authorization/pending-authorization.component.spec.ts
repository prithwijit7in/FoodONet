import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAuthorizationComponent } from './pending-authorization.component';

describe('PendingAuthorizationComponent', () => {
  let component: PendingAuthorizationComponent;
  let fixture: ComponentFixture<PendingAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAuthorizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
