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
  styleUrls: ['./add-card.component.css'],
})
export class AddCardComponent implements OnInit {
  cartItems: any[] = [];
  recommendedItems: any[] = [];
  addresses: any[] = [];
  couponCode: string = '';

  cartSummary: any;
  // deliveryAddress = {
  //   address: '5, MG Road, Indiranagar, Bengaluru, Karnataka – 560038',
  //   name: 'Aarav Sharma',
  //   phone: '1234567899'
  // };

  constructor(public api: AuthService, public api1: UserService) {}

  ngOnInit(): void {
    this.loadCartFromAPI();
    this.loadRecommendedItems();
    this.loadAddresses();
  }
  loadCartFromAPI() {
    const userIdStr = sessionStorage.getItem('userId');

    if (!userIdStr) {
      console.error('User not logged in');
      return;
    }

    const userId = Number(userIdStr);

    this.api.getCartByUserId(userId).subscribe({
      next: (res) => {
        console.log('Cart Response:', res);

        this.cartSummary = res;

        // map backend items → UI format
        this.cartItems = res.items;
      },
      error: (err) => {
        console.error('Failed to load cart', err);
      },
    });
  }

  increaseQty(item: any) {
    const userId = Number(sessionStorage.getItem('userId'));

    this.api.addToCart(userId, item.mealId, 1).subscribe(() => {
      this.loadCartFromAPI(); // refresh cart
    });
  }

  decreaseQty(item: any) {
    const userId = Number(sessionStorage.getItem('userId'));

    this.api.removeFromCart(userId, item.mealId).subscribe(() => {
      this.loadCartFromAPI();
    });
  }

  clearCart() {
    const userId = Number(sessionStorage.getItem('userId'));

    this.api.clearCart(userId).subscribe(() => {
      this.cartItems = [];
      this.cartSummary = null;
    });
  }

  // ===== Recommended static items =====
  loadRecommendedItems() {
    this.recommendedItems = [
      {
        title: 'Butter Naan',
        description:
          'Soft, fluffy Indian flatbread baked in tandoor, perfect with curries.',
        price: 45,
        image: 'assets/images/butter-naan.jpg',
      },
      {
        title: 'Paneer Masala',
        description: 'Rich creamy paneer curry cooked in tomato-cashew gravy.',
        price: 350,
        image: 'assets/images/paneer-masala.jpg',
      },
    ];
  }
  // ===== Add from Recommended Section =====
  addRecommendedToCart(food: any) {
    const existing = this.cartItems.find((item) => item.name === food.title);
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({
        name: food.title,
        description: food.description,
        price: food.price,
        quantity: 1,
        image: food.image,
      });
    }
  }
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
      console.error(
        'User ID in session storage is not a valid number:',
        userIdStr
      );
      return;
    }
    this.api1.getAddressesByUserId(userId).subscribe((data) => {
      console.log(data);
      this.addresses = data;
    });
  }

  selectAddress(selected: any) {
    const index = this.addresses.indexOf(selected);

    if (index > -1) {
      // swap selected address with first address
      const temp = this.addresses[0];
      this.addresses[0] = selected;
      this.addresses[index] = temp;
    }
  }
}
