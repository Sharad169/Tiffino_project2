// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter, withComponentInputBinding } from '@angular/router';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { DeleteAccount1Component } from './deleteaccount1/deleteaccount1.component';
// import { Deleteaccount2Component } from './deleteaccount2/deleteaccount2.component';

// export const routes = [
//   { path: '', redirectTo: 'deleteaccount1', pathMatch: 'full' as const },
//   { path: 'deleteaccount1', component: DeleteAccount1Component },
//   { path: 'deleteaccount2', component: Deleteaccount2Component },
//   {
//     path: 'profile',
//     loadComponent: () =>
//       import('./profile/profile.component').then((m) => m.ProfileComponent),
//   },
// ];

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes, withComponentInputBinding()),
//     provideClientHydration(),
//     provideHttpClient(),
//     importProvidersFrom(CommonModule, FormsModule),
//   ],
// };

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
  ],
};
