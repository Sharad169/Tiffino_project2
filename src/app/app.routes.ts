import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { NorthComponent } from './north/north.component';
import { SouthComponent } from './south/south.component';
import { PunjabiComponent } from './punjabi/punjabi.component';
import { GujratiComponent } from './gujrati/gujrati.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },

  // Default route → Welcome screen
  { path: 'welcome', component: WelcomeScreenComponent },

  // Registration
  { path: '', component: UserSignInComponent },

  //North
  { path: 'north', component: NorthComponent },

  //South
  { path: 'south', component: SouthComponent },

  //Punjabi
  { path: 'punjabi', component: PunjabiComponent },

  //Gujrati
  { path: 'gujrati', component: GujratiComponent },

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
