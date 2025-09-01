import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';

export const routes: Routes = [
    {path : "home", component : HomeComponent},

    //Registration
    {path: "", children :[
        {path : "", component : UserSignInComponent}
    ]}
];
