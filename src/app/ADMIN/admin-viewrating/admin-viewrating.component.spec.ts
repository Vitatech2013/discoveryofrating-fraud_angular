import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewratingComponent } from './admin-viewrating.component';

describe('AdminViewratingComponent', () => {
  let component: AdminViewratingComponent;
  let fixture: ComponentFixture<AdminViewratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewratingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
