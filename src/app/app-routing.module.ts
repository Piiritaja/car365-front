import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { HomePageComponent } from './home-page/home-page.component';
import {PostNewListingComponent} from './post-new-listing/post-new-listing.component';
import {ListingComponent} from './listing/listing.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'allcars', component: DummyComponent},
  {path: 'post', component: PostNewListingComponent},
  {path: 'listings', component: ListingComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
