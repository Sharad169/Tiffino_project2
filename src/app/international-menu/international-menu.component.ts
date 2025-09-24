import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-international-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './international-menu.component.html',
  styleUrls: ['./international-menu.component.css']
})
export class InternationalMenuComponent {
  cuisines = [
    { name: 'Italian', route: '/Italian' },
    { name: 'Chinese', route: '/Chinese' },
    { name: 'Thai', route: '/Thai' },
    { name: 'Margherita Pizza', route: '/Margherita Pizza' },
    { name: 'Middle Eastern', route: '/Middle Eastern' },
    { name: 'Korean', route: '/Korean' },
    { name: 'Scrollable', route: 'Scrollable' },
    { name: 'America', route: '/America' },
    { name: 'French', route: '/French' },
    { name: 'Mediterranean', route: '/Mediterranean' }
  ];

  // 👇 Add scroll reference
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer!: ElementRef;

  // 👇 Scroll methods (fix for your error)
  scrollLeft() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
}
