import { Component, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { DelpartnersidebarComponent } from './delpartnersidebar/delpartnersidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    Sidebar2Component,
    DelpartnersidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'Tiffino';
  showLayout = true;
  private subs = new Subscription();
  private isBrowser: boolean;

  constructor(private router: Router, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    // Initial visibility check
    this.updateLayoutVisibility();

    // Listen for route changes
    const navSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.updateLayoutVisibility());
    this.subs.add(navSub);

    // Listen for hash changes (like #registration-section)
    if (this.isBrowser) {
      window.addEventListener(
        'hashchange',
        this.updateLayoutVisibility.bind(this)
      );
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.isBrowser) {
      window.removeEventListener(
        'hashchange',
        this.updateLayoutVisibility.bind(this)
      );
    }
  }

  /** ================================
   *  Hide header/footer for these pages:
   *  - Login (default '/' or '')
   *  - Registration fragment (#registration-section)
   *  - Verification OTP
   *  - Onboarding
   *  - Welcome
   *  - Superadmin Set Password
   *  - Login2
   *  ================================ */
  private updateLayoutVisibility(): void {
    let url = this.router.url || '';
    let fragment = '';

    if (this.isBrowser) {
      const tree = this.router.parseUrl(url);
      fragment = tree.fragment || window.location.hash.replace('#', '');
    }

    if (url === '') {
      url = '/';
    }

    const hideRoutes = [
      '/', // login
      '/login',
      '/verification-otp',
      '/onboarding',
      '/welcome',
      '/login2',
      '/superadminsetpasssword',
    ];

    const hideFragments = ['registration-section'];

    const isHiddenRoute = hideRoutes.includes(url);
    const isHiddenFragment = hideFragments.includes(fragment);

    this.showLayout = !(isHiddenRoute || isHiddenFragment);
  }
}
