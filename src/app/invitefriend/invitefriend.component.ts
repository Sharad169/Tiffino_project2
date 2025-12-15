import { Component, ElementRef, ViewChild } from '@angular/core'; // Import ViewChild and ElementRef
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
 
@Component({
  selector: 'app-invitefriend',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './invitefriend.component.html',
  styleUrls: ['./invitefriend.component.css'],
})
export class InvitefriendComponent {
  // Use ViewChild to easily reference the input element for copying
  @ViewChild('inputRef') inputRef!: ElementRef;
 
  inputValue: string = '';
  showIcons: boolean = false;
 
  // A property to store the actual referral link
  referralLink: string = 'YourReferralLinkHere';
 
  updateInput(value: string) {
    this.inputValue = value;
  }
 
  async copyLink() {
    // The link to copy is the hardcoded referralLink or the user-entered number (for SMS/direct share)
    const textToCopy = this.inputValue || this.referralLink;
 
    if (!textToCopy) {
      alert('Please enter a number or ensure the referral link is set.');
      return;
    }
 
    try {
      await navigator.clipboard.writeText(textToCopy);
      // alert('Referral Link / Number Copied successfully!');
 
      // OPTIONAL: You can change the button text temporarily to indicate success
      const copyBtn = document.querySelector('.copy-link-btn');
      if (copyBtn) {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy Link';
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      alert('Copy failed. Your browser may not support clipboard access.');
    }
  }
 
  shareNow() {
    // Toggle the display of the social icons when the Share button is clicked
    this.showIcons = !this.showIcons;
  }
}
 
 