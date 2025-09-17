import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

interface Product {
  title: string;
  image: string;
  price: number;
  description: string;
  cuisine: string;
  rating: number;
}

@Component({
  selector: 'app-explore-subpage',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './explore-subpage.component.html',
  styleUrls: ['./explore-subpage.component.css'],
})
export class ExploreSubpageComponent implements OnInit {
  products: Product[] = [
    // ---------------- NORTH INDIAN ----------------
    {
      title: 'Paneer Makhani',
      image: '../assets/north indian/Paneer Makhani.jpg',
      price: 500,
      description:
        'Creamy tomato-based curry with soft paneer cubes, rich in flavor and spices.',
      cuisine: 'North Indian',
      rating: 4,
    },
    {
      title: 'Dal makhani',
      image: '../assets/north indian/dal makhani.jpg',
      price: 550,
      description:
        'A rich and creamy black lentil curry slow-cooked with butter, cream, and aromatic spices.',
      cuisine: 'North Indian',
      rating: 3,
    },
    {
      title: 'Litti chokha',
      image: '../assets/north indian/Litti chokha.jpg',
      price: 400,
      description:
        'Smoked wheat balls stuffed with spiced gram flour, served with mashed spiced veggies.',
      cuisine: 'North Indian',
      rating: 4,
    },
    {
      title: 'Bajra Rotii',
      image: '../assets/north indian/Bajra roti.jpg',
      price: 550,
      description:
        'A wholesome flatbread made from pearl millet flour, rich in fiber and earthy in flavor.',
      cuisine: 'North Indian',
      rating: 3,
    },
    {
      title: 'Veg Thali',
      image: '../assets/north indian/Veg Thali.png',
      price: 450,
      description:
        'A wholesome platter of assorted Indian vegetarian dishes served with love.',
      cuisine: 'North Indian',
      rating: 4,
    },
    {
      title: 'Dal Chawal',
      image: '../assets/north indian/Dal Chawal.jpg',
      price: 250,
      description:
        'Comforting yellow lentils paired with steamed rice — a true homestyle classic.',
      cuisine: 'North Indian',
      rating: 3,
    },

    // ---------------- SOUTH INDIAN ----------------
    {
      title: 'Masala Dosa',
      image: '../assets/south indian/Masala Dosa.jpg',
      price: 300,
      description:
        'Crispy rice dosa filled with spiced potato masala served with chutney & sambhar.',
      cuisine: 'South Indian',
      rating: 4,
    },
    {
      title: 'Masala Idli',
      image: '../assets/south indian/Masala Idli.jpg',
      price: 200,
      description:
        'Soft & spiced mini idlis tossed in flavorful masala served with chutney.',
      cuisine: 'South Indian',
      rating: 3,
    },
    {
      title: 'Rice and Khichdi',
      image: '../assets/south indian/Rice and Khichdi.jpg',
      price: 150,
      description:
        'Comforting mix of rice and dal, lightly spiced & served with papad.',
      cuisine: 'South Indian',
      rating: 4,
    },

    // ---------------- PUNJABI ----------------
{
  title: 'Amritsari Kulcha',
  image: '../assets/punjabi/Amritsari Kulcha.jpg',
  price: 180,
  description: 'Stuffed kulcha baked in tandoor, served with chole & chutney.',
  cuisine: 'Punjabi',
  rating: 5,
},
{
  title: 'Chole Bhature',
  image: '../assets/punjabi/Chole Bhature.jpg',
  price: 220,
  description: 'Spicy chickpeas curry with fluffy deep-fried bhature.',
  cuisine: 'Punjabi',
  rating: 4,
},
{
  title: 'Sarson da Saag & Makki di Roti',
  image: '../assets/punjabi/Sarson da Saag.jpg',
  price: 250,
  description: 'Classic winter Punjabi dish with mustard greens and corn flatbread.',
  cuisine: 'Punjabi',
  rating: 5,
},
{
  title: 'Butter Chicken',
  image: '../assets/punjabi/Butter Chicken.jpg',
  price: 320,
  description: 'Juicy chicken cooked in creamy tomato-butter gravy.',
  cuisine: 'Punjabi',
  rating: 5,
},
{
  title: 'Punjabi Thali',
  image: '../assets/punjabi/Punjabi Thali.jpg',
  price: 400,
  description: 'Assorted Punjabi delicacies served with roti, rice, and sweets.',
  cuisine: 'Punjabi',
  rating: 4,
},

  ];

  cart: Product[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  get northIndianProducts(): Product[] {
    return this.products.filter((p) => p.cuisine === 'North Indian');
  }

  get southIndianProducts(): Product[] {
    return this.products.filter((p) => p.cuisine === 'South Indian');
  }
  get punjabiProducts(): Product[] {
  return this.products.filter((p) => p.cuisine === 'Punjabi');
}


  addToCart(item: Product) {
    this.cart.push(item);
    alert(`${item.title} added to cart`);
  }

  
}
