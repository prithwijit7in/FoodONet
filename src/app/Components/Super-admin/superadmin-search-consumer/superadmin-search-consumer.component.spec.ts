import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminSearchConsumerComponent } from './superadmin-search-consumer.component';

describe('SuperadminSearchConsumerComponent', () => {
  let component: SuperadminSearchConsumerComponent;
  let fixture: ComponentFixture<SuperadminSearchConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminSearchConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminSearchConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
