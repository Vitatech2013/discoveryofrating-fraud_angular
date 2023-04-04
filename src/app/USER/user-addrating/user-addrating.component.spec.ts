import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddratingComponent } from './user-addrating.component';

describe('UserAddratingComponent', () => {
  let component: UserAddratingComponent;
  let fixture: ComponentFixture<UserAddratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddratingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
