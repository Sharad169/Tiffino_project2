import { Component, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { isPlatformBrowser, CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
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

    // Watch for Angular route changes
    const navSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.updateLayoutVisibility());
    this.subs.add(navSub);

    // Watch for hash changes (like #registration-section)
    if (this.isBrowser) {
      window.addEventListener('hashchange', this.updateLayoutVisibility.bind(this));
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.isBrowser) {
      window.removeEventListener('hashchange', this.updateLayoutVisibility.bind(this));
    }
  }

  /**
   * Hide header/footer for these pages only:
   * - Login (default route '' or '/')
   * - Registration fragment (#registration-section)
   * - Verification OTP page
   * - Onboarding page
   * - Welcome page
   */
  private updateLayoutVisibility(): void {
    let url = this.router.url || '';
    let fragment = '';

    if (this.isBrowser) {
      // Get fragment if available
      const tree = this.router.parseUrl(url);
      fragment = tree.fragment || window.location.hash.replace('#', '');
    }

    // Normalize URL — treat both '' and '/' as login route
    if (url === '') {
      url = '/';
    }

    const hideRoutes = [
      '/',                  // login (root)
      '/verification-otp',  
      '/onboarding',       
      '/welcome',           
    ];

    const hideFragments = ['registration-section'];

    const isHiddenRoute = hideRoutes.includes(url);
    const isHiddenFragment = hideFragments.includes(fragment);

    // If any hidden route or fragment matches → hide header/footer
    this.showLayout = !(isHiddenRoute || isHiddenFragment);
  }
}
