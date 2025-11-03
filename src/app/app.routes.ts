import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
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
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { ItemdeliveredComponent } from './itemdelivered/itemdelivered.component';
import { TrackingpageComponent } from './trackingpage/trackingpage.component';
import { AddresspageComponent } from './addresspage/addresspage.component';
import { CoupenpageComponent } from './coupenpage/coupenpage.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { LogoutComponent } from './logout/logout.component';
import { Deleteaccount1Component } from './deleteaccount1/deleteaccount1.component';

import { PrivacyComponent } from './privacy/privacy.component';
import { PromocodeComponent } from './promocode/promocode.component';
import { Itemdelevered2Component } from './itemdelevered2/itemdelevered2.component';
import { WalletpageComponent } from './walletpage/walletpage.component';
import { InvitefriendComponent } from './invitefriend/invitefriend.component';
import { SubscriptionplanComponent } from './subscriptionplan/subscriptionplan.component';
import { Login2Component } from './login2/login2.component';

import { GetplanComponent } from './getplan/getplan.component';
import { SubscriptionpageComponent } from './subscriptionpage/subscriptionpage.component';
import { FinalpageComponent } from './finalpage/finalpage.component';
import { ManagerregiComponent } from './managerregi/managerregi.component';
import { DietarypreferenceComponent } from './dietarypreference/dietarypreference.component';

import { ChineseMaunComponent } from './chinese-maun/chinese-maun.component';

import { InternationalMenuComponent } from './international-menu/international-menu.component';

import { ExploreSubpageComponent } from './explore/explore-subpage/explore-subpage.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { CuisineDetailComponent } from './cuisine-detail/cuisine-detail.component';
import { CategoryComponent } from './category/category.component';

import { DescriptionComponent } from './description/description.component';

import { AddCardComponent } from './add-card/add-card.component';

import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ManagerinfoComponent } from './managerinfo/managerinfo.component';
import { SuperadminchefComponent } from './superadminchef/superadminchef.component';
import { SuperadmindelpartnerComponent } from './superadmindelpartner/superadmindelpartner.component';
import { AddaddressComponent } from './addaddress/addaddress.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { SuperadminkitchenComponent } from './superadminkitchen/superadminkitchen.component';
import { SuperadminsetpassswordComponent } from './superadminsetpasssword/superadminsetpasssword.component';

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

  //Login2
  { path: 'login2', component: Login2Component },

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

  //Goa
  { path: 'goa', component: GoaComponent },

  //Recommendation
  { path: 'recommendation', component: RecommendationComponent },

  //Profile
  { path: 'profile', component: ProfileComponent },

  //Rating
  { path: 'rating', component: RatingComponent },

  //Orderhistory
  { path: 'orderhistory', component: OrderhistoryComponent },

  //Addresspage
  { path: 'addresspage', component: AddresspageComponent },

  //Coupenpage
  { path: 'coupenpage', component: CoupenpageComponent },

  //Helpcenter
  { path: 'helpcenter', component: HelpcenterComponent },

  //Logout
  { path: 'logout', component: LogoutComponent },

  //Privacy
  { path: 'privacy', component: PrivacyComponent },

  //Deleteaccount1
  { path: 'deleteaccount1', component: Deleteaccount1Component },

  //Itemdeleverd
  { path: 'itemdelivered', component: ItemdeliveredComponent },

  //Itemdelevered
  { path: 'itemdelevered2', component: Itemdelevered2Component },

  //Tracking
  { path: 'trackingpage', component: TrackingpageComponent },

  //Promocode
  { path: 'promocode', component: PromocodeComponent },

  //Walletpage
  { path: 'walletpage', component: WalletpageComponent },

  //Invitefriend
  { path: 'invitefriend', component: InvitefriendComponent },

  //Subscriptionplan
  { path: 'subscriptionplan', component: SubscriptionplanComponent },

  //Getplan
  { path: 'getplan', component: GetplanComponent },

  //Subscriptionpage
  { path: 'subscriptionpage', component: SubscriptionpageComponent },

  //Dietarypreference
  { path: 'dietarypreference', component: DietarypreferenceComponent },

  //Finalpage
  { path: 'finalpage', component: FinalpageComponent },

  //ManagerRegi
  { path: 'managerregi', component: ManagerregiComponent },

  //Managerinfo
  { path: 'managerinfo', component: ManagerinfoComponent },

  //Superadminchef
  { path: 'superadminchef', component: SuperadminchefComponent },

  //Superadmindelpartner
  { path: 'superadmindelpartner', component: SuperadmindelpartnerComponent },

  //Addaddress
  { path: 'addaddress', component: AddaddressComponent },

  //ListEmployee
  { path: 'listemployee', component: ListemployeeComponent },

  //Superadminkitchen
  { path: 'superadminkitchen', component: SuperadminkitchenComponent },

  //Superadminsetpassword

  { path: 'superadminsetpassword', component: SuperadminsetpassswordComponent },

  //Chinese Maun
  { path: 'chinese-maun', component: ChineseMaunComponent },

  //international-menu
  { path: 'international-menu', component: InternationalMenuComponent },

  //description
  { path: 'description', component: DescriptionComponent },

  //Add-card

  //checkout page
  { path: 'checkout-page', component: CheckoutPageComponent },

  // Optional: redirect unknown paths to Welcome
  { path: '**', redirectTo: '' },
];
