import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FilterComponent} from './filter/filter.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule, MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {ListingComponent} from './listing/listing.component';
import {ListingViewComponent} from './listing-view/listing-view.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomePageComponent} from './home-page/home-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SignupComponent} from './signup/signup.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {PostNewListingComponent} from './post-new-listing/post-new-listing.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {RemoveDuplicatesPipe} from './removeDuplicates.pipe';
import {SearchListingsComponent} from './search-listings/search-listings.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ListingHeaderComponent} from './listing-header/listing-header.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {ProfilePageListingsComponent} from './profile-page-listings/profile-page-listings.component';
import {ProfilePageFavoritesComponent} from './profile-page-favorites/profile-page-favorites.component';
import {ProfilePageSettingsComponent} from './profile-page-settings/profile-page-settings.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {EditListingComponent} from './edit-listing/edit-listing.component';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {AllCarsComponent} from './all-cars/all-cars.component';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import { FullFilterComponent } from './filter/full-filter/full-filter.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListingViewComponent,
    FilterComponent,
    ListingComponent,
    LoginComponent,
    HomePageComponent,
    SignupComponent,
    PostNewListingComponent,
    RemoveDuplicatesPipe,
    SearchListingsComponent,
    ListingHeaderComponent,
    ProfilePageComponent,
    ProfilePageListingsComponent,
    ProfilePageFavoritesComponent,
    ProfilePageSettingsComponent,
    EditListingComponent,
    DeleteDialogComponent,
    AllCarsComponent,
    FooterComponent,
    FullFilterComponent,
    FullFilterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatStepperModule,
    MatAutocompleteModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
