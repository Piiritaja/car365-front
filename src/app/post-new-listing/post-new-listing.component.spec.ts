import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNewListingComponent } from './post-new-listing.component';

describe('PostNewListingComponent', () => {
  let component: PostNewListingComponent;
  let fixture: ComponentFixture<PostNewListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNewListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNewListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
