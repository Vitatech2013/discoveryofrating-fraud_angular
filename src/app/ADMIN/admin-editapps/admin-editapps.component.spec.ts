import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditappsComponent } from './admin-editapps.component';

describe('AdminEditappsComponent', () => {
  let component: AdminEditappsComponent;
  let fixture: ComponentFixture<AdminEditappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditappsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
