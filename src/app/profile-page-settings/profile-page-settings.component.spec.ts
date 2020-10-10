import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageSettingsComponent } from './profile-page-settings.component';

describe('ProfilePageSettingsComponent', () => {
  let component: ProfilePageSettingsComponent;
  let fixture: ComponentFixture<ProfilePageSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
