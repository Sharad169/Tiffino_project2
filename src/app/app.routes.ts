import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { ExploreSubpageComponent } from './explore/explore-subpage/explore-subpage.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';

export const routes: Routes = [
  // Default page
  { path: '', component: ExploreSubpageComponent },

  // Home page
  { path: 'home', component: HomeComponent },

  // Verification / OTP page
  { path: 'verification-code', component: VerificationCodeComponent },

  // Login / Registration
  { path: 'login', component: UserSignInComponent },

  // Onboarding screen
  { path: 'onboarding', component: OnboardingComponent },

  // Welcome screen
  { path: 'welcome', component: WelcomeScreenComponent },

  // Redirect unknown paths
  { path: '**', redirectTo: '' },
];
