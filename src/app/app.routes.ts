import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ProfileComponent } from './profile/profile.component';
import { RatingComponent } from './rating/rating.component';
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
import { ManagerYourdetailssubmitpageComponent } from './manager-yourdetailssubmitpage/manager-yourdetailssubmitpage.component';
import { SuperadminmanagereditpageComponent } from './superadminmanagereditpage/superadminmanagereditpage.component';
import { SuperadminchefeditpageComponent } from './superadminchefeditpage/superadminchefeditpage.component';
import { SuperadmindelpartnereditpageComponent } from './superadmindelpartnereditpage/superadmindelpartnereditpage.component';
import { CurrentordersComponent } from './currentorders/currentorders.component';
import { DetailedorderpageComponent } from './detailedorderpage/detailedorderpage.component';
import { TrackingorderpageComponent } from './trackingorderpage/trackingorderpage.component';
import { UserCouponpageComponent } from './user-couponpage/user-couponpage.component';
import { UserRatingpageComponent } from './user-ratingpage/user-ratingpage.component';
import { UserItemdeliverdpageComponent } from './user-itemdeliverdpage/user-itemdeliverdpage.component';
import { UserWishlistpageComponent } from './user-wishlistpage/user-wishlistpage.component';
import { UserSubscriptionpageComponent } from './user-subscriptionpage/user-subscriptionpage.component';

import { UserYoursubscriptionplanComponent } from './user-yoursubscriptionplan/user-yoursubscriptionplan.component';
import { UserDietarypreferanceComponent } from './user-dietarypreferance/user-dietarypreferance.component';
import { UserFinalpageComponent } from './user-finalpage/user-finalpage.component';
import { UserSubscriptionplandetailsComponent } from './user-subscriptionplandetails/user-subscriptionplandetails.component';

export const routes: Routes = [
  // Default page

  // Default route → Welcome screen

  { path: 'welcome', component: WelcomeScreenComponent },

  // Home page

  { path: 'home', component: HomeComponent },

  // Verification / OTP page

  { path: 'verification-otp', component: VerificationCodeComponent },

  // { path: '', component: VerificationCodeComponent },

  // Login / Registration

  { path: '', component: UserSignInComponent },

  // Onboarding screen

  { path: 'onboarding', component: OnboardingComponent },

  // Welcome screen (explicit route)

  { path: 'welcome', component: WelcomeScreenComponent },

  { path: 'cuisine-detail/:id', component: CuisineDetailComponent },

  { path: 'category/:category', component: CategoryComponent },

  { path: 'meals', component: AddCardComponent },

  //Recommendation
  { path: 'recommendation', component: RecommendationComponent },

  //Profile
  { path: 'profile/:id', component: ProfileComponent },

  //Rating
  { path: 'rating', component: RatingComponent },

  //description
  { path: 'description', component: DescriptionComponent },

  // profile
  // orderhistory
  { path: 'orderhistory', component: OrderhistoryComponent },
  { path: 'currentorders', component: CurrentordersComponent },
  { path: 'detailedorderpage/:orderId', component: DetailedorderpageComponent },
  { path: 'trackingorderpage/:orderId', component: TrackingorderpageComponent },
  { path: 'user-couponpage', component: UserCouponpageComponent },
  { path: 'user-ratingpage', component: UserRatingpageComponent },
  { path: 'user-itemdeliverdpage', component: UserItemdeliverdpageComponent },
  { path: 'user-wishlistpage', component: UserWishlistpageComponent },
  {
    path: 'user-yoursubscriptionplan',
    component: UserYoursubscriptionplanComponent,
  },
  {
    path: 'user-subscriptionplandetails/:subscriptionId',
    component: UserSubscriptionplandetailsComponent,
  },
  { path: 'user-dietarypreference', component: UserDietarypreferanceComponent },
  { path: 'user-subscriptionpage', component: UserSubscriptionpageComponent },
  { path: 'user-finalpage', component: UserFinalpageComponent },
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
  {
    path: 'cloudkitchen-registration',
    component: CloudkitchenRegistrationComponent,
  },

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
    component: SuperadminkitchendetailsComponent,
  },

  {
    path: 'superadminmanagerdetails/:empId/:role',
    component: SuperadminemployeedetailsComponent,
  },

  { path: 'superadminmeal', component: SuperadminmealComponent },

  { path: 'manager-login', component: ManagerLoginComponent },

  { path: 'manager-setpassword', component: ManagerSetpasswordComponent },

  {
    path: 'manager-yourdetailspage',
    component: ManagerYourdetailspageComponent,
  },

  {
    path: 'manager-yourdetailssubmitpage',
    component: ManagerYourdetailssubmitpageComponent,
  },

  {
    path: 'manageryourdetailseditrequestpage',
    component: ManagerYourdetailseditrequestpageComponent,
  },

  {
    path: 'superadminchefeditpage/:employeeCode',
    component: SuperadminchefeditpageComponent,
  },

  {
    path: 'superadminmanagereditpage/:employeeCode',
    component: SuperadminmanagereditpageComponent,
  },

  {
    path: 'superadmindelpartnereditpage/:employeeCode',
    component: SuperadmindelpartnereditpageComponent,
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
    url.startsWith('/superadminsetpassword') ||
    url.startsWith('/listemployee') ||
    url.startsWith('/manager-login')
  );
}
