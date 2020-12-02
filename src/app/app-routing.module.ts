import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostNewListingComponent} from './post-new-listing/post-new-listing.component';
import {ListingComponent} from './listing/listing.component';
import {ListingViewComponent} from './listing-view/listing-view.component';
import {SearchListingsComponent} from './search-listings/search-listings.component';
import {AllCarsComponent} from './all-cars/all-cars.component';
import {EditListingComponent} from './edit-listing/edit-listing.component';
import {AuthGuard} from './helpers/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'allCars', component: AllCarsComponent},
  {path: 'post', component: PostNewListingComponent, canActivate: [AuthGuard]},
  {path: 'listings', component: ListingComponent},
  {path: 'listings/:id', component: ListingViewComponent},
  {path: 'search', component: SearchListingsComponent},
  {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
  {path: 'listings/edit/:id', component: EditListingComponent},
  {path: 'search/:i', component: SearchListingsComponent},
  {path: 'allCars/:i', component: AllCarsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
