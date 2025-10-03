import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-chinese-maun',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './chinese-maun.component.html',
  styleUrl: './chinese-maun.component.css'
})
export class ChineseMaunComponent {
  chineseDishes = [
    {
      name: 'Mapo Tofu',
      description: 'Wok-tossed noodles with vegetables and protein of choice..',
      price: '₹ 500',
      image: '../assets/Chinese/Mapo Tofu.png',
      rating: 4.5
    },
    {
      name: 'Egg Fried Rice',
      description: 'Fluffy rice stir-fried with egg, soy sauce, and veggies.',
      price: '₹ 500',
      image: '../assets/Chinese/Egg Fried Rice.png',
      rating: 5.8
    },
    {
      name: 'Hot and Sour Soup',
      description: 'Spicy-sour broth with mushrooms, tofu, and bamboo shoots.',
      price: '₹ 500',
      image: '../assets/Chinese/Hot and Sour Soup.png',
      rating: 4.7
    },
    {
      name: 'Peking Duck',
      description: 'Crispy roasted duck served with pancakes and hoisin sauce.',
      price: '₹ 500',
      image: '../assets/Chinese/Peking Duck.png',
      rating: 3.3
    },
    {
      name: 'Dim Sum',
      description: 'Assortment of dumplings, buns, and bite-sized Cantonese snacks.',
      price: '₹ 500',
      image: '../assets/Chinese/Dim Sum.png',
      rating: 4.9
    },
    {
      name: 'Szechuan Noodles',
      description: 'Fiery noodles tossed with garlic, chili oil, and veggies.',
      price: '₹ 500',
      image: '../assets/Chinese/Szechuan Noodles.png',
      rating: 4.4
    },
    {
      name: 'General Tso Chicken',
      description: 'Sweet, tangy, and mildly spicy battered chicken.',
      price: '₹ 500',
      image: '../assets/Chinese/General Tso Chicken.png',
      rating: 3.6
    },
    {
      name: 'Caprese Salad',
      description: 'Tomatoes, mozzarella, and fresh basil with olive oil.',
      price: '₹ 500',
      image: '../assets/Italian/Caprese Salad.png',
      rating: 5.5
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
      rating: 3.4
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
      rating: 5
    }
  ];
}
