import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminConsumerDetailsComponent } from './superadmin-consumer-details.component';

describe('SuperadminConsumerDetailsComponent', () => {
  let component: SuperadminConsumerDetailsComponent;
  let fixture: ComponentFixture<SuperadminConsumerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminConsumerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminConsumerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
