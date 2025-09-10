import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

export const routes: Routes = [
  // Default route → Welcome screen
  { path: 'welcome', component: WelcomeScreenComponent },

  { path: 'home', component: HomeComponent },

  // Login / Registration
  { path: '', component: UserSignInComponent },

  // Onboarding screen
  { path: 'onboarding', component: OnboardingComponent },

  // Redirect unknown paths
  { path: '**', redirectTo: '' },
];

// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
// import { OnboardingComponent } from './onboarding/onboarding.component';
// import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

// export const routes: Routes = [
//   // Default route → choose either Onboarding or WelcomeScreen
//   { path: '', component: WelcomeScreenComponent },

//   { path: 'home', component: HomeComponent },

//   // Registration / Login
//   { path: 'login', component: UserSignInComponent },

//   // Optional: Onboarding route
//   { path: 'onboarding', component: OnboardingComponent },

//   // Redirect unknown paths to default
//   { path: '**', redirectTo: '' },
// ];

// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
// import { OnboardingComponent } from './onboarding/onboarding.component';
// import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

// export const routes: Routes = [
//   { path: '', component: OnboardingComponent },
//   { path: 'home', component: HomeComponent },

//   { path: '', component: WelcomeScreenComponent },

//   { path: 'login', component: UserSignInComponent },

//   { path: '**', redirectTo: '' },
// ];
