import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {PostNewListingComponent} from './post-new-listing/post-new-listing.component';
import {ListingComponent} from './listing/listing.component';
import {ListingViewComponent} from './listing-view/listing-view.component';
import {SearchListingsComponent} from './search-listings/search-listings.component';
import {AllCarsComponent} from './all-cars/all-cars.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'allCars', component: AllCarsComponent},
  {path: 'post', component: PostNewListingComponent},
  {path: 'listings', component: ListingComponent},
  {path: 'listings/:id', component: ListingViewComponent},
  {path: 'search', component: SearchListingsComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
