import { BurgerItem, EventItem } from './types';

export const COLORS = {
  cream: '#FDF5E6',      // Background
  terracotta: '#B3541E', // Primary & Accent
  charcoal: '#333333',   // Text
};

const burgerPrefixes = ['Vintage', 'Royal', 'Smoky', 'Gourmet', 'Spicy', 'Garden', 'Classic', 'Mega', 'Mini', 'Double', 'Triple', 'Ultimate', 'Cheesy', 'Crispy', 'Truffle', 'Bacon', 'Onion', 'Mushroom', 'Pepper', 'Sweet'];
const burgerCores = ['Angus', 'Beef', 'Chicken', 'Veggie', 'Plant', 'Turkey', 'Lamb', 'Pork', 'Fish', 'Portobello'];
const burgerSuffixes = ['Deluxe', 'Surprise', 'Stack', 'Bite', 'Crunch', 'Masterpiece', 'Extreme', 'Simple', 'Lover', 'Feast'];

const images = [
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=400&auto=format&fit=crop'
];

// Generate 250 items
export const MENU_ITEMS: BurgerItem[] = Array.from({ length: 250 }, (_, i) => {
  const p = burgerPrefixes[i % burgerPrefixes.length];
  const c = burgerCores[Math.floor(i / 10) % burgerCores.length];
  const s = burgerSuffixes[Math.floor(i / 25) % burgerSuffixes.length];
  
  return {
    id: i + 1,
    name: `${p} ${c} ${s}`,
    description: `A delicious blend of ${p.toLowerCase()} seasonings and premium ${c.toLowerCase()} served on a toasted brioche bun.`,
    price: parseFloat((8 + Math.random() * 10).toFixed(2)),
    image: images[i % images.length],
    category: c === 'Veggie' || c === 'Plant' ? 'Green' : 'Classic'
  };
});

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: 'Vintage Jazz Night',
    date: 'OCT 25, 2024',
    description: 'Enjoy live jazz music while savoring our limited edition Midnight Burger.',
    image: 'https://images.unsplash.com/photo-1514525253361-bee871847e7b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Burger Workshop',
    date: 'NOV 12, 2024',
    description: 'Learn the secrets of the perfect grill from our master chefs.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop'
  }
];