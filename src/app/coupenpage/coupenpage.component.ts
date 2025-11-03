import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coupenpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coupenpage.component.html',
  styleUrls: ['./coupenpage.component.css'],
})
export class CoupenpageComponent {
  selectedCoupon: any = null;

  coupons = [
    {
      code: 'WELCOME50',
      title: 'Welcome Offer',
      popupText: 'Get 50% off on your first order.',
      expiry: '31/12/2025',
      color: 'rgba(255, 77, 77, 1)',
    },
    {
      code: 'FESTIVE20',
      title: 'Festive Discount',
      popupText: 'Enjoy 20% off during the festive season.',
      expiry: '15/11/2025',
      color: 'rgba(77, 182, 255, 1)',
    },
    {
      code: 'SAVE10',
      title: 'Save Big',
      popupText: 'Flat 10% off on all products.',
      expiry: '01/01/2026',
      color: 'rgba(102, 255, 178, 1)',
    },
  ];

  openPopup(coupon: any) {
    this.selectedCoupon = coupon;
  }

  closePopup() {
    this.selectedCoupon = null;
  }

  // ✅ THIS MUST EXIST
  redeemCoupon(coupon: any) {
    console.log('Coupon Redeemed:', coupon.code);
    this.closePopup();
  }
}
