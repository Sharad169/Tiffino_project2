import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tiffino';
  showLayout = true;

  constructor(private router: Router) {




    // Handle refresh + first load
    this.showLayout = !this.shouldHideLayout(this.router.url || '/');

    // Handle route changes
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((navEnd: NavigationEnd) => {
        this.showLayout = !this.shouldHideLayout(navEnd.urlAfterRedirects || navEnd.url);
      });
  }

  /**
   * Decide which routes should NOT display header/footer.
   * Add all "no-header-footer" pages here.
   */
  private shouldHideLayout(url: string): boolean {
    // Hide header/footer for onboarding, verification-code, welcome, or verify-otp pages
    const hiddenRoutes = [
      '/',                   // homepage (if you don’t want header/footer there)
      '/onboarding',
      '/verification-code',
      '/login',
      '/register',
      '/welcome',
      '/verify-otp'
    ];

    // Check exact match OR startsWith for nested routes
    return (
      url === '' ||
      hiddenRoutes.some(route => url === route || url.startsWith(route))
    );
  }

  
}
