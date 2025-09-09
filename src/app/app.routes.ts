import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
import { OnboardingComponent } from './onboarding/onboarding.component'; 

export const routes: Routes = [
    { path: '', component: OnboardingComponent }, 
    {path : "home", component : HomeComponent},

    //Registration
        {path: "", children :[
            // {path : "", component : UserSignInComponent}
    ]}
];
