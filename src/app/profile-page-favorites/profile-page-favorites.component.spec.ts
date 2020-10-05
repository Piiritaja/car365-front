import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageFavoritesComponent } from './profile-page-favorites.component';

describe('ProfilePageFavoritesComponent', () => {
  let component: ProfilePageFavoritesComponent;
  let fixture: ComponentFixture<ProfilePageFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
