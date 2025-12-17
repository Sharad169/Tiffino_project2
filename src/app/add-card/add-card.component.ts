import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  cartItems: any[] = [];
  recommendedItems: any[] = [];
  addresses: any[] = [];

  couponCode: string = '';
  discount: number = 0;
  // deliveryAddress = {
  //   address: '5, MG Road, Indiranagar, Bengaluru, Karnataka – 560038',
  //   name: 'Aarav Sharma',
  //   phone: '1234567899'
  // };

  constructor(public api: AuthService, public api1: UserService) {}

  ngOnInit(): void {
    this.loadCart();
    this.loadRecommendedItems();
    this.loadAddresses();
  }

  // ===== Load cart from localStorage =====
  loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartItems = Array.isArray(cart) ? cart : [];
  }

  // ===== Recommended static items =====
  loadRecommendedItems() {
    this.recommendedItems = [
      {
        title: 'Butter Naan',
        description: 'Soft, fluffy Indian flatbread baked in tandoor, perfect with curries.',
        price: 45,
        image: 'assets/images/butter-naan.jpg'
      },
      {
        title: 'Paneer Masala',
        description: 'Rich creamy paneer curry cooked in tomato-cashew gravy.',
        price: 350,
        image: 'assets/images/paneer-masala.jpg'
      }
    ];
  }

  // ===== Quantity Controls =====
  increaseQty(item: any) {
    item.quantity++;
    this.syncCart();
  }

  decreaseQty(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.syncCart();
    }
  }

  // ===== Remove a single item =====
  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
    this.syncCart();
  }

  // ===== Clear entire cart =====
  clearCart() {
    this.cartItems = [];
    this.syncCart();
  }

  // ===== Add from Recommended Section =====
  addRecommendedToCart(food: any) {
    const existing = this.cartItems.find(item => item.name === food.title);
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({
        name: food.title,
        description: food.description,
        price: food.price,
        quantity: 1,
        image: food.image
      });
    }
    this.syncCart();
  }

  // ===== Sync cart to localStorage =====
  syncCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.updateCartTotal();
  }

  // ===== Cart Total =====
  getCartTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  updateCartTotal() {
    this.discount = this.calculateDiscount();
  }

  // ===== Coupon Code =====
  applyCoupon() {
    if (this.couponCode.trim().toLowerCase() === 'save50') {
      this.discount = 50;
      alert('Coupon applied! You saved ₹50');
    } else {
      this.discount = 0;
      alert('Invalid coupon code');
    }
    this.updateCartTotal();
  }

  calculateDiscount(): number {
    return this.discount;
  }

  // ===== Checkout =====
  checkout() {
    alert('Checkout successful! Total: ₹' + (this.getCartTotal() - this.discount));
    this.clearCart();
  }

  // ===== Cancel Order =====
  cancelOrder() {
    alert('Order cancelled successfully.');
  }

    loadAddresses() {
    const userIdStr = sessionStorage.getItem('userId');
    if (!userIdStr) {
      console.error('User ID not found in session storage.');
      return;
    }
    const userId = Number(userIdStr);
    if (Number.isNaN(userId)) {
      console.error('User ID in session storage is not a valid number:', userIdStr);
      return;
    }
    this.api1.getAddressesByUserId(userId).subscribe((data) => {
      console.log(data);
      this.addresses = data;
    });
  }
}
