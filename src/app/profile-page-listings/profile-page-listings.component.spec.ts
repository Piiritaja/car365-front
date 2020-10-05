import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageListingsComponent } from './profile-page-listings.component';

describe('ProfilePageListingsComponent', () => {
  let component: ProfilePageListingsComponent;
  let fixture: ComponentFixture<ProfilePageListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
