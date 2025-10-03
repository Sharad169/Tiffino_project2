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
      image: '../assets/South Indian/Masala Dosa.jpg',
      price: 300,
      description:
        'Crispy rice dosa filled with spiced potato masala served with chutney & sambhar.',
      cuisine: 'South Indian',
      rating: 4,
    },
    {
      title: 'Masala Idli',
      image: '../assets/South Indian/Masala Idli.png',
      price: 200,
      description:
        'Soft & spiced mini idlis tossed in flavorful masala served with chutney.',
      cuisine: 'South Indian',
      rating: 3,
    },
    {
      title: 'Rice and Khichdi',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 150,
      description:
        'Comforting mix of rice and dal, lightly spiced & served with papad.',
      cuisine: 'South Indian',
      rating: 4,
    },
    {
      title: 'Uttapam',
      image: '../assets/South Indian/Uttapam.jpg',
      price: 170,
      description: 'Thick pancake topped with onions, tomatoes, and chilies.',
      cuisine: 'South Indian',
      rating: 5,
    },
    {
      title: 'Upma',
      image: '../assets/South Indian/Upma.jpg',
      price: 250,
      description: 'Savory porridge made from semolina, cooked with spices.',
      cuisine: 'South Indian',
      rating: 4,
    },
    {
      title: 'Bisi Bele Bath',
      image: '../assets/South Indian/Bisi Bele Bath.jpg',
      price: 170,
      description:
        'Karnataka-style rice dish with lentils, tamarind, and spices.',
      cuisine: 'South Indian',
      rating: 3,
    },
    {
      title: 'Hyderabadi Biryani',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 190,
      description:
        'Aromatic rice and meat dish with strong Mughlai-South Indian flavors',
      cuisine: 'South Indian',
      rating: 5,
    },

    // ---------------- PUNJABI ----------------
    {
      title: 'Amritsari Kulcha',
      image: '../assets/Panjabi/Amritsari Kulcha.jpg',
      price: 180,
      description: 'Stuffed kulcha baked in tandoor, served with chole & chutney.',
      cuisine: 'Punjabi',
      rating: 5,
    },
    {
      title: 'Chole Bhature',
      image: '../assets/Panjabi/Chole Bhature.jpg',
      price: 220,
      description: 'Spicy chickpeas curry with fluffy deep-fried bhature.',
      cuisine: 'Punjabi',
      rating: 4,
    },
    {
      title: ' Makki di Roti',
      image: '../assets/Panjabi/Makke ki roti.png',
      price: 250,
      description:
        'Classic winter Punjabi dish with mustard greens and corn flatbread.',
      cuisine: 'Punjabi',
      rating: 5,
    },
    {
      title: 'Butter Chicken',
      image: '../assets/Panjabi/Butter Chicken.jpg',
      price: 320,
      description: 'Juicy chicken cooked in creamy tomato-butter gravy.',
      cuisine: 'Punjabi',
      rating: 5,
    },
    {
      title: 'Rajma',
      image: '../assets/Panjabi/Rajma.jpg',
      price: 400,
      description: 'Red kidney bean curry in a thick tomato-onion gravy.',
      cuisine: 'Punjabi',
      rating: 4,
    },
    {
      title: 'Sarson da Saag',
      image: '../assets/Panjabi/Sarson da Saag.jpg',
      price: 400,
      description: 'Mustard greens curry, winter specialty of Punjab.',
      cuisine: 'Punjabi',
      rating: 4,
    },
    {
      title: 'Tandoori Roti',
      image: '../assets/Panjabi/Tandoori Roti.jpg',
      price: 300,
      description: 'Whole wheat roti cooked in a clay oven for smoky flavor.',
      cuisine: 'Punjabi',
      rating: 3,
    },
    {
      title: 'Lassi',
      image: '../assets/Panjabi/Lassi.jpg',
      price: 100,
      description: 'Refreshing yogurt-based drink, sweet or salty, often topped with malai.',
      cuisine: 'Punjabi',
      rating: 5,
    },

    // ---------------- Gujarati ----------------
    {
      title: 'Masala Dosa',
      image: '../assets/South Indian/Masala Dosa.jpg',
      price: 300,
      description:
        'Crispy rice dosa filled with spiced potato masala served with chutney & sambhar.',
      cuisine: 'Gujarati',
      rating: 4,
    },
    {
      title: 'Masala Idli',
      image: '../assets/South Indian/Masala Idli.png',
      price: 200,
      description:
        'Soft & spiced mini idlis tossed in flavorful masala served with chutney.',
      cuisine: 'Gujarati',
      rating: 3,
    },
    {
      title: 'Rice and Khichdi',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 150,
      description:
        'Comforting mix of rice and dal, lightly spiced & served with papad.',
      cuisine: 'Gujarati',
      rating: 4,
    },
    {
      title: 'Uttapam',
      image: '../assets/South Indian/Uttapam.jpg',
      price: 170,
      description: 'Thick pancake topped with onions, tomatoes, and chilies.',
      cuisine: 'Gujarati',
      rating: 5,
    },
    {
      title: 'Upma',
      image: '../assets/South Indian/Upma.jpg',
      price: 250,
      description: 'Savory porridge made from semolina, cooked with spices.',
      cuisine: 'Gujarati',
      rating: 4,
    },
    {
      title: 'Bisi Bele Bath',
      image: '../assets/South Indian/Bisi Bele Bath.jpg',
      price: 170,
      description:
        'Karnataka-style rice dish with lentils, tamarind, and spices.',
      cuisine: 'Gujarati',
      rating: 3,
    },
    {
      title: 'Hyderabadi Biryani',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 190,
      description:
        'Aromatic rice and meat dish with strong Mughlai-South Indian flavors',
      cuisine: 'Gujarati',
      rating: 5,
    },

    // ---------------- Rajasthani ----------------
    {
      title: 'Masala Dosa',
      image: '../assets/South Indian/Masala Dosa.jpg',
      price: 300,
      description:
        'Crispy rice dosa filled with spiced potato masala served with chutney & sambhar.',
      cuisine: 'Rajasthani',
      rating: 4,
    },
    {
      title: 'Masala Idli',
      image: '../assets/South Indian/Masala Idli.png',
      price: 200,
      description:
        'Soft & spiced mini idlis tossed in flavorful masala served with chutney.',
      cuisine: 'Rajasthani',
      rating: 3,
    },
    {
      title: 'Rice and Khichdi',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 150,
      description:
        'Comforting mix of rice and dal, lightly spiced & served with papad.',
      cuisine: 'Rajasthani',
      rating: 4,
    },
    {
      title: 'Uttapam',
      image: '../assets/South Indian/Uttapam.jpg',
      price: 170,
      description: 'Thick pancake topped with onions, tomatoes, and chilies.',
      cuisine: 'Rajasthani',
      rating: 5,
    },
    {
      title: 'Upma',
      image: '../assets/South Indian/Upma.jpg',
      price: 250,
      description: 'Savory porridge made from semolina, cooked with spices.',
      cuisine: 'Rajasthani',
      rating: 4,
    },
    {
      title: 'Bisi Bele Bath',
      image: '../assets/South Indian/Bisi Bele Bath.jpg',
      price: 170,
      description:
        'Karnataka-style rice dish with lentils, tamarind, and spices.',
      cuisine: 'Rajasthani',
      rating: 3,
    },
    {
      title: 'Hyderabadi Biryani',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 190,
      description:
        'Aromatic rice and meat dish with strong Mughlai-South Indian flavors',
      cuisine: 'Rajasthani',
      rating: 5,
    },

    // ---------------- Maharashtrian ----------------
    {
      title: 'Masala Dosa',
      image: '../assets/South Indian/Masala Dosa.jpg',
      price: 300,
      description:
        'Crispy rice dosa filled with spiced potato masala served with chutney & sambhar.',
      cuisine: 'Maharashtrian',
      rating: 4,
    },
    {
      title: 'Masala Idli',
      image: '../assets/South Indian/Masala Idli.png',
      price: 200,
      description:
        'Soft & spiced mini idlis tossed in flavorful masala served with chutney.',
      cuisine: 'Maharashtrian',
      rating: 3,
    },
    {
      title: 'Rice and Khichdi',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 150,
      description:
        'Comforting mix of rice and dal, lightly spiced & served with papad.',
      cuisine: 'Maharashtrian',
      rating: 4,
    },
    {
      title: 'Uttapam',
      image: '../assets/South Indian/Uttapam.jpg',
      price: 170,
      description: 'Thick pancake topped with onions, tomatoes, and chilies.',
      cuisine: 'Maharashtrian',
      rating: 5,
    },
    {
      title: 'Upma',
      image: '../assets/South Indian/Upma.jpg',
      price: 250,
      description: 'Savory porridge made from semolina, cooked with spices.',
      cuisine: 'Maharashtrian',
      rating: 4,
    },
    {
      title: 'Bisi Bele Bath',
      image: '../assets/South Indian/Bisi Bele Bath.jpg',
      price: 170,
      description:
        'Karnataka-style rice dish with lentils, tamarind, and spices.',
      cuisine: 'Maharashtrian',
      rating: 3,
    },
    {
      title: 'Hyderabadi Biryani',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 190,
      description:
        'Aromatic rice and meat dish with strong Mughlai-South Indian flavors',
      cuisine: 'Maharashtrian',
      rating: 5,
    },

    // ---------------- Bengali----------------
    {
      title: 'Masala Dosa',
      image: '../assets/South Indian/Masala Dosa.jpg',
      price: 300,
      description:
        'Crispy rice dosa filled with spiced potato masala served with chutney & sambhar.',
      cuisine: 'Bengali',
      rating: 4,
    },
    {
      title: 'Masala Idli',
      image: '../assets/South Indian/Masala Idli.png',
      price: 200,
      description:
        'Soft & spiced mini idlis tossed in flavorful masala served with chutney.',
      cuisine: 'Bengali',
      rating: 3,
    },
    {
      title: 'Rice and Khichdi',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 150,
      description:
        'Comforting mix of rice and dal, lightly spiced & served with papad.',
      cuisine: 'Bengali',
      rating: 4,
    },
    {
      title: 'Uttapam',
      image: '../assets/South Indian/Uttapam.jpg',
      price: 170,
      description: 'Thick pancake topped with onions, tomatoes, and chilies.',
      cuisine: 'Bengali',
      rating: 5,
    },
    {
      title: 'Upma',
      image: '../assets/South Indian/Upma.jpg',
      price: 250,
      description: 'Savory porridge made from semolina, cooked with spices.',
      cuisine: 'Bengali',
      rating: 4,
    },
    {
      title: 'Bisi Bele Bath',
      image: '../assets/South Indian/Bisi Bele Bath.jpg',
      price: 170,
      description:
        'Karnataka-style rice dish with lentils, tamarind, and spices.',
      cuisine: 'Bengali',
      rating: 3,
    },
    {
      title: 'Hyderabadi Biryani',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 190,
      description:
        'Aromatic rice and meat dish with strong Mughlai-South Indian flavors',
      cuisine: 'Bengali',
      rating: 5,
    },

    // ---------------- Kashmiri----------------
    {
      title: 'Masala Dosa',
      image: '../assets/South Indian/Masala Dosa.jpg',
      price: 300,
      description:
        'Crispy rice dosa filled with spiced potato masala served with chutney & sambhar.',
      cuisine: 'Kashmiri',
      rating: 4,
    },
    {
      title: 'Masala Idli',
      image: '../assets/South Indian/Masala Idli.png',
      price: 200,
      description:
        'Soft & spiced mini idlis tossed in flavorful masala served with chutney.',
      cuisine: 'Kashmiri',
      rating: 3,
    },
    {
      title: 'Rice and Khichdi',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 150,
      description:
        'Comforting mix of rice and dal, lightly spiced & served with papad.',
      cuisine: 'Kashmiri',
      rating: 4,
    },
    {
      title: 'Uttapam',
      image: '../assets/South Indian/Uttapam.jpg',
      price: 170,
      description: 'Thick pancake topped with onions, tomatoes, and chilies.',
      cuisine: 'Kashmiri',
      rating: 5,
    },
    {
      title: 'Upma',
      image: '../assets/South Indian/Upma.jpg',
      price: 250,
      description: 'Savory porridge made from semolina, cooked with spices.',
      cuisine: 'Kashmiri',
      rating: 4,
    },
    {
      title: 'Bisi Bele Bath',
      image: '../assets/South Indian/Bisi Bele Bath.jpg',
      price: 170,
      description:
        'Karnataka-style rice dish with lentils, tamarind, and spices.',
      cuisine: 'Kashmiri',
      rating: 3,
    },
    {
      title: 'Hyderabadi Biryani',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 190,
      description:
        'Aromatic rice and meat dish with strong Mughlai-South Indian flavors',
      cuisine: 'Kashmiri',
      rating: 5,
    },

     // ---------------- Hyderabad----------------
    {
      title: 'Masala Dosa',
      image: '../assets/South Indian/Masala Dosa.jpg',
      price: 300,
      description:
        'Crispy rice dosa filled with spiced potato masala served with chutney & sambhar.',
      cuisine: 'Hyderabad',
      rating: 4,
    },
    {
      title: 'Masala Idli',
      image: '../assets/South Indian/Masala Idli.png',
      price: 200,
      description:
        'Soft & spiced mini idlis tossed in flavorful masala served with chutney.',
      cuisine: 'Hyderabad',
      rating: 3,
    },
    {
      title: 'Rice and Khichdi',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 150,
      description:
        'Comforting mix of rice and dal, lightly spiced & served with papad.',
      cuisine: 'Hyderabad',
      rating: 4,
    },
    {
      title: 'Uttapam',
      image: '../assets/South Indian/Uttapam.jpg',
      price: 170,
      description: 'Thick pancake topped with onions, tomatoes, and chilies.',
      cuisine: 'Hyderabad',
      rating: 5,
    },
    {
      title: 'Upma',
      image: '../assets/South Indian/Upma.jpg',
      price: 250,
      description: 'Savory porridge made from semolina, cooked with spices.',
      cuisine: 'Hyderabad',
      rating: 4,
    },
    {
      title: 'Bisi Bele Bath',
      image: '../assets/South Indian/Bisi Bele Bath.jpg',
      price: 170,
      description:
        'Karnataka-style rice dish with lentils, tamarind, and spices.',
      cuisine: 'Hyderabad',
      rating: 3,
    },
    {
      title: 'Hyderabadi Biryani',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 190,
      description:
        'Aromatic rice and meat dish with strong Mughlai-South Indian flavors',
      cuisine: 'Hyderabad',
      rating: 5,
    },

    // ---------------- Goan----------------
    {
      title: 'Masala Dosa',
      image: '../assets/South Indian/Masala Dosa.jpg',
      price: 300,
      description:
        'Crispy rice dosa filled with spiced potato masala served with chutney & sambhar.',
      cuisine: 'Goan',
      rating: 4,
    },
    {
      title: 'Masala Idli',
      image: '../assets/South Indian/Masala Idli.png',
      price: 200,
      description:
        'Soft & spiced mini idlis tossed in flavorful masala served with chutney.',
      cuisine: 'Goan',
      rating: 3,
    },
    {
      title: 'Rice and Khichdi',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 150,
      description:
        'Comforting mix of rice and dal, lightly spiced & served with papad.',
      cuisine: 'Goan',
      rating: 4,
    },
    {
      title: 'Uttapam',
      image: '../assets/South Indian/Uttapam.jpg',
      price: 170,
      description: 'Thick pancake topped with onions, tomatoes, and chilies.',
      cuisine: 'Goan',
      rating: 5,
    },
    {
      title: 'Upma',
      image: '../assets/South Indian/Upma.jpg',
      price: 250,
      description: 'Savory porridge made from semolina, cooked with spices.',
      cuisine: 'Goan',
      rating: 4,
    },
    {
      title: 'Bisi Bele Bath',
      image: '../assets/South Indian/Bisi Bele Bath.jpg',
      price: 170,
      description:
        'Karnataka-style rice dish with lentils, tamarind, and spices.',
      cuisine: 'Goan',
      rating: 3,
    },
    {
      title: 'Hyderabadi Biryani',
      image: '../assets/South Indian/Rice and Khichdi.png',
      price: 190,
      description:
        'Aromatic rice and meat dish with strong Mughlai-South Indian flavors',
      cuisine: 'Goan',
      rating: 5,
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

  get GujaratiProducts(): Product[] {
    return this.products.filter((p) => p.cuisine === 'Gujarati');
  }

    get RajasthaniProducts(): Product[] {
    return this.products.filter((p) => p.cuisine === 'Rajasthani');
  }

      get MaharashtrianProducts(): Product[] {
    return this.products.filter((p) => p.cuisine === 'Maharashtrian');
  }

        get BengaliProducts(): Product[] {
    return this.products.filter((p) => p.cuisine === 'Bengali');
  }

          get KashmiriProducts(): Product[] {
    return this.products.filter((p) => p.cuisine === 'Kashmiri');
  }
            get HyderabadProducts(): Product[] {
    return this.products.filter((p) => p.cuisine === 'Hyderabad');
  }
          get GoanProducts(): Product[] {
    return this.products.filter((p) => p.cuisine === 'Goan');
  }
  


  addToCart(item: Product) {
    this.cart.push(item);
    alert(`${item.title} added to cart`);
  }


  // 🔹 Scroll right for horizontal card scroll
  scrollRight(container: HTMLElement) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }

  // 🔹 Smooth scroll to section by ID
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
