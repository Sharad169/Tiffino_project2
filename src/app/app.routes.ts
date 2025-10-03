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

import { ExploreSubpageComponent } from './explore/explore-subpage/explore-subpage.component';

import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { CuisineDetailComponent } from './cuisine-detail/cuisine-detail.component';
import { CategoryComponent } from './category/category.component';

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

  //Punjabi
  { path: 'punjabi', component: PunjabiComponent },

  //Gujrati
  { path: 'gujrati', component: GujratiComponent },

  //Rajsthani
  { path: 'rajsthani', component: RajsthaniComponent },

  // Optional: redirect unknown paths to Welcome
  { path: '**', redirectTo: '' },
  
];
