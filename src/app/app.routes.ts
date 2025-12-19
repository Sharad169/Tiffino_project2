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

import { DietaryPreferenceComponent } from './dietary-preference/dietary-preference.component';

import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

import { AddressPageComponent } from './address-page/address-page.component';

import { HelpCenterComponent } from './helpcenter/helpcenter.component';

import { PromocodeComponent } from './promocode/promocode.component';

import { InvitefriendComponent } from './invitefriend/invitefriend.component';

import { PrivacyComponent } from './privacy/privacy.component';

import { Deleteaccount1Component } from './deleteaccount1/deleteaccount1.component';

// Super Admin
import { CloudkitchenRegistrationComponent } from './cloudkitchen-registration/cloudkitchen-registration.component';

import { SuperadminLoginComponent } from './superadmin-login/superadmin-login.component';

import { ManagerRegistrationComponent } from './manager-registration/manager-registration.component';
import { SuperadminsetpasswordComponent } from './superadminsetpassword/superadminsetpassword.component';
import { SuperadmincloudkitchenComponent } from './superadmincloudkitchen/superadmincloudkitchen.component';
import { ManagerinfoComponent } from './managerinfo/managerinfo.component';
import { SuperadminchefComponent } from './superadminchef/superadminchef.component';
import { SuperadmindelpartnerComponent } from './superadmindelpartner/superadmindelpartner.component';
import { SuperadminkitchenComponent } from './superadminkitchen/superadminkitchen.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { SuperadminkitchendetailsComponent } from './superadminkitchendetails/superadminkitchendetails.component';
import { SuperadminemployeedetailsComponent } from './superadminemployeedetails/superadminemployeedetails.component';
import { SuperadminmealComponent } from './superadminmeal/superadminmeal.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { SuperadmineditlistComponent } from './superadmineditlist/superadmineditlist.component';
import { ManagerSetpasswordComponent } from './manager-setpassword/manager-setpassword.component';
import { ManagerYourdetailspageComponent } from './manager-yourdetailspage/manager-yourdetailspage.component';
import { ManagerYourdetailseditrequestpageComponent } from './manageryourdetailseditrequestpage/manageryourdetailseditrequestpage.component';




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

  // profile
   // orderhistory
   { path: 'orderhistory', component: OrderhistoryComponent },

    // address-page 
   { path: 'address-page', component: AddressPageComponent },

    // HelpCenter
   { path: 'helpcenter', component: HelpCenterComponent },

    // Promocode
   { path: 'promocode', component: PromocodeComponent },  

    // Invitefriend
    { path: 'invitefriend', component: InvitefriendComponent },

    // Privacy
    { path: 'privacy', component: PrivacyComponent },

    // deleteaccount1
    { path: 'deleteaccount1', component: Deleteaccount1Component },

   

//Add-card
{ path: 'add-card', component: AddCardComponent },

  //checkout page
  { path: 'checkout-page', component: CheckoutPageComponent },

    //dietary-preference
  { path: 'dietary-preference', component: DietaryPreferenceComponent },

  // Super Admin
     // cloudkitchen-registration
    { path: 'cloudkitchen-registration', component: CloudkitchenRegistrationComponent },

    // superadmin-login
    { path: 'superadmin-login', component: SuperadminLoginComponent },

    // manager-registration
     { path: 'manager-registration', component: ManagerRegistrationComponent },

     //admin routes can be added here

     { path: 'superadminsetpassword', component: SuperadminsetpasswordComponent },
     { path: 'superAdminLogin', component: SuperadminLoginComponent },

       {
    path: 'superadmincloudkitchen',
    component: SuperadmincloudkitchenComponent,
  },

  { path: 'superAdminEditList', component: SuperadmineditlistComponent },

  { path: 'superadminkitchen', component: SuperadminkitchenComponent },

  { path: 'listemployee', component: ListemployeeComponent },

  {
    path: 'superadminkitchendetails/:kitchenCode',
    component: SuperadminkitchendetailsComponent
  },

  {
    path: 'superadminmanagerdetails/:empId/:role',
    component: SuperadminemployeedetailsComponent,
  },

   { path: 'superadminmeal', component: SuperadminmealComponent },

   {path : 'manager-login', component : ManagerLoginComponent}, 

   { path: 'manager-setpassword', component: ManagerSetpasswordComponent },

   {
    path: 'manager-yourdetailspage',
    component: ManagerYourdetailspageComponent,
  },
 
  {
    path: 'manageryourdetailseditrequestpage',
    component: ManagerYourdetailseditrequestpageComponent,
  },
 

  { path: 'managerinfo', component: ManagerinfoComponent },
  { path: 'superadminchef', component: SuperadminchefComponent },
  { path: 'superadmindelpartner', component: SuperadmindelpartnerComponent },
 

  // Optional: redirect unknown paths to Welcome
  { path: '**', redirectTo: '' },

];

export function shouldHideLayout(url: string): boolean {
  // Hide header/footer for onboarding or verification-otp pages
  return (
    url === '/' ||
    url === '' ||
    url.startsWith('/onboarding') ||
    url.startsWith('/verification-otp') ||
    url.startsWith('/welcome') ||
    url.startsWith('/superadminsetpassword')||
    url.startsWith('/listemployee')||
    url.startsWith('/manager-login')
  );
}

