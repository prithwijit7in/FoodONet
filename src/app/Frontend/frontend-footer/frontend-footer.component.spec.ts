import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendFooterComponent } from './frontend-footer.component';

describe('FrontendFooterComponent', () => {
  let component: FrontendFooterComponent;
  let fixture: ComponentFixture<FrontendFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
