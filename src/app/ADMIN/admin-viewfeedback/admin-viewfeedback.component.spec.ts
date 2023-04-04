import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewfeedbackComponent } from './admin-viewfeedback.component';

describe('AdminViewfeedbackComponent', () => {
  let component: AdminViewfeedbackComponent;
  let fixture: ComponentFixture<AdminViewfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
