import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostedappComponent } from './user-postedapp.component';

describe('UserPostedappComponent', () => {
  let component: UserPostedappComponent;
  let fixture: ComponentFixture<UserPostedappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostedappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPostedappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
