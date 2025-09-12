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
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tiffino';
  showLayout = true; // true => header/footer visible

  constructor(private router: Router) {
    // Set initial visibility based on current URL (handles page reload)
    const initialUrl = this.router.url || '/';
    this.showLayout = !this.shouldHideLayout(initialUrl);

    // Update visibility on navigation end
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((navEnd: NavigationEnd) => {
        const currentUrl = navEnd.urlAfterRedirects || navEnd.url;
        this.showLayout = !this.shouldHideLayout(currentUrl);
      });
  }

  // Customize the routes for which header/footer should be hidden.
  private shouldHideLayout(url: string): boolean {
    // Hide header/footer for onboarding or verification-code pages
    return url === '/' || url === '' || url.startsWith('/onboarding') || url.startsWith('/verification-code');
  }
}
