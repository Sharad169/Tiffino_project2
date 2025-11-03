import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';

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
  ],
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
        this.showLayout = !this.shouldHideLayout(
          navEnd.urlAfterRedirects || navEnd.url
        );
      });
  }

  /**
   * Decide which routes should NOT display header/footer.
   * Add all "no-header-footer" pages here.
   */
  private shouldHideLayout(url: string): boolean {
    // Hide header/footer for onboarding or verification-code pages
    return (
      url === '/' ||
      url === '' ||
      url.startsWith('/onboarding') ||
      url.startsWith('/verification-code') ||
      url.startsWith('/welcome') ||
      url.startsWith('/login2') ||
      url.startsWith('/superadminsetpassword')
    );

    const hiddenRoutes = [
      '/', // homepage (if you don’t want header/footer there)
      '/onboarding',
      '/verification-code',
      '/login',
      '/register',
    ];

    // Check exact match OR startsWith for nested routes
    return hiddenRoutes.some((route) => url === route || url.startsWith(route));
  }
}
