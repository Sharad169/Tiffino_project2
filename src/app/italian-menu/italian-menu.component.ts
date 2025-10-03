import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-italian-menu',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './italian-menu.component.html',
  styleUrl: './italian-menu.component.css'
})
export class ItalianMenuComponent {
  italianDishes = [
    {
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil.',
      price: '₹ 500',
      image: '../assets/Italian/Margherita Pizza.png',
      rating: 4.5
    },
    {
      name: 'Spaghetti Carbonara',
      description: 'Creamy pasta with pancetta, egg, and parmesan cheese.',
      price: '₹ 500',
      image: '../assets/Italian/Spaghetti Carbonara.png',
      rating: 4.8
    },
    {
      name: 'Fettuccine Alfredo',
      description: 'Rich pasta with creamy Alfredo sauce and parmesan cheese.',
      price: '₹ 500',
      image: '../assets/Italian/Fettuccine Alfredo.png',
      rating: 4.7
    },
    {
      name: 'Dumplings',
      description: 'Soft dough filled with veggies and Italian herbs.',
      price: '₹ 500',
      image: '../assets/Italian/Dumplings.png',
      rating: 4.3
    },
    {
      name: 'Tiramisu',
      description: 'Coffee-flavored Italian dessert with mascarpone cheese.',
      price: '₹ 500',
      image: '../assets/Italian/Tiramisu.png',
      rating: 4.9
    },
    {
      name: 'Gnocchi',
      description: 'Potato dumplings with pesto or butter garlic sauce.',
      price: '₹ 500',
      image: '../assets/Italian/Gnocchi.png',
      rating: 4.4
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread topped with fresh tomatoes, basil & olive oil.',
      price: '₹ 500',
      image: '../assets/Italian/Bruschetta.png',
      rating: 4.6
    },
    {
      name: 'Caprese Salad',
      description: 'Tomatoes, mozzarella, and fresh basil with olive oil.',
      price: '₹ 500',
      image: '../assets/Italian/Caprese Salad.png',
      rating: 4.5
    },
    {
      name: 'Arancini',
      description: 'Crispy fried rice balls stuffed with cheese.',
      price: '₹ 500',
      image: '../assets/Italian/Arancini.png',
      rating: 4.7
    },
    {
      name: 'Minestrone Soup',
      description: 'Italian vegetable soup with pasta & beans.',
      price: '₹ 500',
      image: '../assets/Italian/Minestrone Soup.png',
      rating: 4.4
    },
    {
      name: 'Polenta',
      description: 'Creamy cornmeal dish served with sauce or cheese.',
      price: '₹ 500',
      image: '../assets/Italian/Polenta.png',
      rating: 4.2
    },
    {
      name: 'Panzanella',
      description: 'Tuscan salad with bread, tomatoes, cucumber, and onions.',
      price: '₹ 500',
      image: '../assets/Italian/Panzanella.png',
      rating: 4.3
    }
  ];
}