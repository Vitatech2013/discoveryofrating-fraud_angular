import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostappsComponent } from './admin-postapps.component';

describe('AdminPostappsComponent', () => {
  let component: AdminPostappsComponent;
  let fixture: ComponentFixture<AdminPostappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostappsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
