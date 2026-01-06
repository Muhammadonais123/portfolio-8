import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import Menu from './components/Menu';
import Events from './components/Events';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { BurgerItem, CartItem } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: BurgerItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div className="min-h-screen selection:bg-[#B3541E] selection:text-[#FDF5E6] bg-[#FDF5E6]">
      <Header 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartToggle={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        <FeaturedGrid />
        <Menu onAddToCart={addToCart} />
        <Events />
        <Reservation />
      </main>

      <Footer />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
    </div>
  );
};

export default App;