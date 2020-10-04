import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageDisplayAreaComponent } from './profile-page-display-area.component';

describe('ProfilePageDisplayAreaComponent', () => {
  let component: ProfilePageDisplayAreaComponent;
  let fixture: ComponentFixture<ProfilePageDisplayAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageDisplayAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageDisplayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
