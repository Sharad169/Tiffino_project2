import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

export const routes: Routes = [
  { path: '', component: OnboardingComponent },
  { path: 'home', component: HomeComponent },

  // Default route → Welcome screen
  { path: '', component: WelcomeScreenComponent },

  // Registration
  { path: 'login', component: UserSignInComponent },

  // Optional: redirect unknown paths to Welcome
  { path: '**', redirectTo: '' },
];

// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
// import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

// export const routes: Routes = [
//   { path: 'home', component: HomeComponent },

//   //Registration
//   {
//     path: '',
//     children: [
//       { path: '', component: UserSignInComponent },
//       { path: 'welcome', component: WelcomeScreenComponent },
//     ],
//   },
// ];
