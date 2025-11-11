import { Routes } from '@angular/router';

// ===== Common Pages =====
import { HomeComponent } from './home/home.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { UserSignInComponent } from './registration/user-sign-in/user-sign-in.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { Login2Component } from './login2/login2.component';

// ===== Cuisine Pages =====
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
import { ChineseMaunComponent } from './chinese-maun/chinese-maun.component';
import { InternationalMenuComponent } from './international-menu/international-menu.component';
import { CuisineDetailComponent } from './cuisine-detail/cuisine-detail.component';
import { CategoryComponent } from './category/category.component';

// ===== User & Profile Pages =====
import { ProfileComponent } from './profile/profile.component';
import { RatingComponent } from './rating/rating.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { ItemdeliveredComponent } from './itemdelivered/itemdelivered.component';
import { Itemdelevered2Component } from './itemdelevered2/itemdelevered2.component';
import { TrackingpageComponent } from './trackingpage/trackingpage.component';
import { AddresspageComponent } from './addresspage/addresspage.component';
import { AddaddressComponent } from './addaddress/addaddress.component';
import { CoupenpageComponent } from './coupenpage/coupenpage.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { LogoutComponent } from './logout/logout.component';
import { Deleteaccount1Component } from './deleteaccount1/deleteaccount1.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PromocodeComponent } from './promocode/promocode.component';
import { WalletpageComponent } from './walletpage/walletpage.component';
import { InvitefriendComponent } from './invitefriend/invitefriend.component';

// ===== Subscription & Plans =====
import { SubscriptionplanComponent } from './subscriptionplan/subscriptionplan.component';
import { GetplanComponent } from './getplan/getplan.component';
import { SubscriptionpageComponent } from './subscriptionpage/subscriptionpage.component';
import { FinalpageComponent } from './finalpage/finalpage.component';
import { DietarypreferenceComponent } from './dietarypreference/dietarypreference.component';

// ===== E-commerce Related =====
import { AddCardComponent } from './add-card/add-card.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { DescriptionComponent } from './description/description.component';
import { ExploreSubpageComponent } from './explore/explore-subpage/explore-subpage.component';

// ===== Superadmin Pages =====
import { ManagerregiComponent } from './managerregi/managerregi.component';
import { ManagerinfoComponent } from './managerinfo/managerinfo.component';
import { SuperadminchefComponent } from './superadminchef/superadminchef.component';
import { SuperadmindelpartnerComponent } from './superadmindelpartner/superadmindelpartner.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { SuperadminkitchenComponent } from './superadminkitchen/superadminkitchen.component';
import { SuperadminsetpassswordComponent } from './superadminsetpasssword/superadminsetpasssword.component';
import { SuperadminkitchendetailsComponent } from './superadminkitchendetails/superadminkitchendetails.component';
import { SuperadminmanagerdetailsComponent } from './superadminmanagerdetails/superadminmanagerdetails.component';
import { SuperadminchefdetailsComponent } from './superadminchefdetails/superadminchefdetails.component';
import { SuperadmindelpartnerdetailsComponent } from './superadmindelpartnerdetails/superadmindelpartnerdetails.component';
import { SuperadmineditlistComponent } from './superadmineditlist/superadmineditlist.component';
import { SuperadminmanagereditpageComponent } from './superadminmanagereditpage/superadminmanagereditpage.component';
import { SuperadminchefeditpageComponent } from './superadminchefeditpage/superadminchefeditpage.component';
import { SuperadmindelpartnereditpageComponent } from './superadmindelpartnereditpage/superadmindelpartnereditpage.component';
import { SuperadmincloudkitchenComponent } from './superadmincloudkitchen/superadmincloudkitchen.component';
import { SuperadminsubscriberlistComponent } from './superadminsubscriberlist/superadminsubscriberlist.component';
import { SuperadminmanagerlistComponent } from './superadminmanagerlist/superadminmanagerlist.component';
import { SuperadminaddingcuisineComponent } from './superadminaddingcuisine/superadminaddingcuisine.component';
import { SuperadmincheflistComponent } from './superadmincheflist/superadmincheflist.component';
import { SuperadmindelpartnerlistComponent } from './superadmindelpartnerlist/superadmindelpartnerlist.component';
import { SuperadminmealComponent } from './superadminmeal/superadminmeal.component';

export const routes: Routes = [
  // ===== Default Routes =====
  { path: '', component: UserSignInComponent },
  { path: 'login', component: UserSignInComponent },
  { path: 'login2', component: Login2Component },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'verification-otp', component: VerificationCodeComponent },

  // ===== Home / Explore =====
  { path: 'home', component: HomeComponent },
  { path: 'ex', component: ExploreSubpageComponent },

  // ===== Cuisine Pages =====
  { path: 'north', component: NorthComponent },
  { path: 'south', component: SouthComponent },
  { path: 'punjabi', component: PunjabiComponent },
  { path: 'gujrati', component: GujratiComponent },
  { path: 'rajsthani', component: RajsthaniComponent },
  { path: 'maharashtrian', component: MaharashtrianComponent },
  { path: 'bengali', component: BengaliComponent },
  { path: 'kashmiri', component: KashmiriComponent },
  { path: 'hydrabadi', component: HydrabadiComponent },
  { path: 'goa', component: GoaComponent },
  { path: 'chinese-maun', component: ChineseMaunComponent },
  { path: 'international-menu', component: InternationalMenuComponent },
  { path: 'cuisine-detail/:id', component: CuisineDetailComponent },
  { path: 'category/:category', component: CategoryComponent },

  // ===== User & Order Pages =====
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'orderhistory', component: OrderhistoryComponent },
  { path: 'itemdelivered', component: ItemdeliveredComponent },
  { path: 'itemdelevered2', component: Itemdelevered2Component },
  { path: 'trackingpage', component: TrackingpageComponent },
  { path: 'addresspage', component: AddresspageComponent },
  { path: 'addaddress', component: AddaddressComponent },
  { path: 'coupenpage', component: CoupenpageComponent },
  { path: 'helpcenter', component: HelpcenterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'deleteaccount1', component: Deleteaccount1Component },
  { path: 'promocode', component: PromocodeComponent },
  { path: 'walletpage', component: WalletpageComponent },
  { path: 'invitefriend', component: InvitefriendComponent },

  // ===== Subscription / Plans =====
  { path: 'subscriptionplan', component: SubscriptionplanComponent },
  { path: 'getplan', component: GetplanComponent },
  { path: 'subscriptionpage', component: SubscriptionpageComponent },
  { path: 'finalpage', component: FinalpageComponent },
  { path: 'dietarypreference', component: DietarypreferenceComponent },

  // ===== E-commerce Pages =====
  { path: 'add-card', component: AddCardComponent },
  { path: 'checkout-page', component: CheckoutPageComponent },
  { path: 'description', component: DescriptionComponent },

  // ===== Superadmin Section =====
  { path: 'managerregi', component: ManagerregiComponent },
  { path: 'managerinfo', component: ManagerinfoComponent },
  { path: 'superadminchef', component: SuperadminchefComponent },
  { path: 'superadmindelpartner', component: SuperadmindelpartnerComponent },
  { path: 'listemployee', component: ListemployeeComponent },
  { path: 'superadminkitchen', component: SuperadminkitchenComponent },
  { path: 'superadminsetpassword', component: SuperadminsetpassswordComponent },
  {
    path: 'superadminkitchendetails',
    component: SuperadminkitchendetailsComponent,
  },
  {
    path: 'superadminmanagerdetails',
    component: SuperadminmanagerdetailsComponent,
  },
  { path: 'superadminchefdetails', component: SuperadminchefdetailsComponent },
  {
    path: 'superadmindelpartnerdetails',
    component: SuperadmindelpartnerdetailsComponent,
  },
  { path: 'superadmineditlist', component: SuperadmineditlistComponent },
  {
    path: 'superadminmanagereditpage',
    component: SuperadminmanagereditpageComponent,
  },
  {
    path: 'superadminchefeditpage',
    component: SuperadminchefeditpageComponent,
  },
  {
    path: 'superadmindelpartnereditpage',
    component: SuperadmindelpartnereditpageComponent,
  },
  {
    path: 'superadmincloudkitchen',
    component: SuperadmincloudkitchenComponent,
  },
  {
    path: 'superadminsubscriberlist',
    component: SuperadminsubscriberlistComponent,
  },
  { path: 'superadminmanagerlist', component: SuperadminmanagerlistComponent },
  {
    path: 'superadminaddingcuisine',
    component: SuperadminaddingcuisineComponent,
  },
  { path: 'superadmincheflist', component: SuperadmincheflistComponent },
  {
    path: 'superadmindelpartnerlist',
    component: SuperadmindelpartnerlistComponent,
  },
  { path: 'superadminmeal', component: SuperadminmealComponent },

  // ===== Fallback =====
  { path: '**', redirectTo: '' },
];
