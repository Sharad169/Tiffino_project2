import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';

import { OnboardingComponent } from './onboarding/onboarding.component';

import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

import { NorthComponent } from './north/north.component';

import { ExploreSubpageComponent } from './explore/explore-subpage/explore-subpage.component';

import { VerificationCodeComponent } from './verification-code/verification-code.component';
 
export const routes: Routes = [

  // Default page

  { path: 'ex', component: ExploreSubpageComponent },
 
  // Default route → Welcome screen

  { path: 'welcome', component: WelcomeScreenComponent },
 
  // Home page

  { path: 'home', component: HomeComponent },
 
  // Verification / OTP page

  { path: 'verification-otp', component: VerificationCodeComponent },
 
  // Login / Registration

  { path: '', component: UserSignInComponent },
 
  // North page

  { path: 'north', component: NorthComponent },
 
  // Onboarding screen

  { path: 'onboarding', component: OnboardingComponent },
 
  // Welcome screen (explicit route)

  { path: 'welcome', component: WelcomeScreenComponent },
 
  // Redirect unknown paths

  { path: '**', redirectTo: '' },

];

 