import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddfeedbackComponent } from './user-addfeedback.component';

describe('UserAddfeedbackComponent', () => {
  let component: UserAddfeedbackComponent;
  let fixture: ComponentFixture<UserAddfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
