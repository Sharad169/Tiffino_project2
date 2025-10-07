import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {
  cartItems = [
    {
      name: 'Paneer Butter Masala',
      description: 'A rich, creamy curry made with paneer cubes simmered in a tomato-cashew gravy, flavored with butter and aromatic spices. Perfectly pairs with naan or jeera rice.',
      price: 500,
      quantity: 2,
      image: '../assets/International Cuisines/American.jpg'
    },
    {
      name: 'Paneer Butter Masala',
      description: 'A rich, creamy curry made with paneer cubes simmered in a tomato-cashew gravy, flavored with butter and aromatic spices. Perfectly pairs with naan or jeera rice.',
      price: 500,
      quantity: 2,
      image: '../assets/International Cuisines/American.jpg'
    }
  ];



recommendedItems = [
  {
    title: 'Butter Naan',
    description:
      'A soft, fluffy, and slightly chewy Indian flatbread baked in a tandoor, perfect for pairing with rich curries.',
    price: 45,
    image: '../assets/International Cuisines/American.jpg',
  },
  {
    title: 'Paneer Butter Masala',
    description:
      'A rich and creamy curry made with soft paneer cubes simmered in spiced tomato gravy.',
    price: 350,
    image: '../assets/International Cuisines/American.jpg',
  },
  {
    title: 'Veg Biryani',
    description:
      'Aromatic basmati rice cooked with vegetables, saffron, and flavorful spices.',
    price: 220,
    image: '../assets/International Cuisines/American.jpg',
  },
  {
    title: 'Gulab Jamun',
    description:
      'Soft, spongy balls made from khoya soaked in sugar syrup for a sweet finish.',
    price: 80,
    image: '../assets/International Cuisines/American.jpg',
  },
];


  deliveryAddress = {
    name: 'Arav Sharma',
    address: '5, MG Road, Indiranagar, Bengaluru, Karnataka - 560038',
    phone: '1234567890'
  };

  couponCode = '';
  discount = 150;

  increaseQty(item: any) { item.quantity++; }
  decreaseQty(item: any) { if(item.quantity>1) item.quantity--; }
  addToCart(product: any) { console.log('Add to cart', product); }
  applyCoupon() { console.log('Apply coupon', this.couponCode); }
  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
