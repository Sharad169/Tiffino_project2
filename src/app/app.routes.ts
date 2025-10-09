import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { NorthComponent } from './north/north.component';
import { SouthComponent } from './south/south.component';
import { PunjabiComponent } from './punjabi/punjabi.component';
import { GujratiComponent } from './gujrati/gujrati.component';
import { RajsthaniComponent } from './rajsthani/rajsthani.component';
import { MaharashtrianComponent } from './maharashtrian/maharashtrian.component';
import { BengaliComponent } from './bengali/bengali.component';
import { KashmiriComponent } from './kashmiri/kashmiri.component';
import { HydrabadiComponent } from './hydrabadi/hydrabadi.component';
import { GoaComponent } from './goa/goa.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ProfileComponent } from './profile/profile.component';
import { RatingComponent } from './rating/rating.component';

import { ChineseMaunComponent } from './chinese-maun/chinese-maun.component';

import { InternationalMenuComponent } from './international-menu/international-menu.component';

import { ExploreSubpageComponent } from './explore/explore-subpage/explore-subpage.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { CuisineDetailComponent } from './cuisine-detail/cuisine-detail.component';
import { CategoryComponent } from './category/category.component';

import { DescriptionComponent } from './description/description.component';

import { AddCardComponent } from './add-card/add-card.component';

import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

export const routes: Routes = [
  // Default page

  { path: 'ex', component: ExploreSubpageComponent },

  // Default route → Welcome screen

  { path: 'welcome', component: WelcomeScreenComponent },

  // Home page

  { path: 'home', component: HomeComponent },

  // Verification / OTP page

  { path: 'verification-otp', component: VerificationCodeComponent },


  // { path: '', component: VerificationCodeComponent },
 

  // Login / Registration

  { path: '', component: UserSignInComponent },

  // North page

  { path: 'north', component: NorthComponent },

  // Onboarding screen

  { path: 'onboarding', component: OnboardingComponent },

  // Welcome screen (explicit route)

  { path: 'welcome', component: WelcomeScreenComponent },

  // Redirect unknown paths

  //South
  { path: 'south', component: SouthComponent },

  { path: 'cuisine-detail/:id', component: CuisineDetailComponent },

  { path: 'category/:category', component: CategoryComponent },

  { path: 'meals', component: AddCardComponent },

  //Punjabi
  { path: 'punjabi', component: PunjabiComponent },

  //Gujrati
  { path: 'gujrati', component: GujratiComponent },

  //Rajsthani
  { path: 'rajsthani', component: RajsthaniComponent },

  //Maharashtrian
  { path: 'maharashtrian', component: MaharashtrianComponent },

  //Bengali
  { path: 'bengali', component: BengaliComponent },

  //Kashmiri
  { path: 'kashmiri', component: KashmiriComponent },

  //Hydrabadi
  { path: 'hydrabadi', component: HydrabadiComponent },

  //Goan
  { path: 'goa', component: GoaComponent },

  //Recommendation
  { path: 'recommendation', component: RecommendationComponent },

  //Profile
 { path: 'profile/:id', component: ProfileComponent },

  //Rating
  { path: 'rating', component: RatingComponent },

  //Chinese Maun
  { path: 'chinese-maun', component: ChineseMaunComponent },

  //international-menu
  { path: 'international-menu', component: InternationalMenuComponent },

  //description
  { path: 'description', component: DescriptionComponent },

  //Add-card

  //checkout page
  { path: 'checkout-page', component: CheckoutPageComponent },

  // Optional: redirect unknown paths to Welcome
  { path: '**', redirectTo: '' },
  
];
