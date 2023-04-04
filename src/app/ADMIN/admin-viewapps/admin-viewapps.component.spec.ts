import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewappsComponent } from './admin-viewapps.component';

describe('AdminViewappsComponent', () => {
  let component: AdminViewappsComponent;
  let fixture: ComponentFixture<AdminViewappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewappsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
