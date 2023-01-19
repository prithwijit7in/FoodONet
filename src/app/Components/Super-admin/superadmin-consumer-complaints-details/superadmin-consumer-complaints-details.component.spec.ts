import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminConsumerComplaintsDetailsComponent } from './superadmin-consumer-complaints-details.component';

describe('SuperadminConsumerComplaintsDetailsComponent', () => {
  let component: SuperadminConsumerComplaintsDetailsComponent;
  let fixture: ComponentFixture<SuperadminConsumerComplaintsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminConsumerComplaintsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminConsumerComplaintsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
