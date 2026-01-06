import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MENU_ITEMS } from '../constants';
import { BurgerItem } from '../types';
import { Plus } from 'lucide-react';

interface MenuProps {
  onAddToCart: (item: BurgerItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [visibleCount, setVisibleCount] = useState(12);

  const loadMore = () => setVisibleCount(prev => Math.min(prev + 12, MENU_ITEMS.length));

  return (
    <section id="menu" className="py-24 bg-[#FDF5E6]">
      <div className="container mx-auto px-6">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <span className="bg-[#B3541E]/10 text-[#B3541E] px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
            Over 200 Variations
          </span>
          <h2 className="font-heading text-5xl text-[#333333] mt-6">CHOOSE & ENJOY</h2>
          <p className="text-[#333333]/70 max-w-2xl mx-auto mt-4 leading-relaxed">
            Our massive collection guarantees you'll find your perfect burger soulmate. From classic beef to exotic plant-based delights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {MENU_ITEMS.slice(0, visibleCount).map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-[#333333]/5"
            >
              <div className="overflow-hidden rounded-[2rem] mb-6 aspect-square relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#B3541E] px-3 py-1 rounded-full font-bold text-xs text-[#FDF5E6] shadow-sm">
                  {item.category}
                </div>
              </div>
              <h4 className="font-heading text-xl text-[#333333] mb-3 line-clamp-1">{item.name}</h4>
              <p className="text-xs text-[#333333]/60 mb-6 leading-relaxed flex-grow">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-heading text-[#B3541E]">${item.price.toFixed(2)}</span>
                <button 
                  onClick={() => onAddToCart(item)}
                  className="bg-[#B3541E] text-[#FDF5E6] p-3 rounded-2xl hover:bg-[#333333] transition-all shadow-md group-hover:rotate-6"
                >
                  <Plus size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < MENU_ITEMS.length && (
          <div className="mt-20 text-center">
            <button 
              onClick={loadMore}
              className="px-12 py-5 bg-[#B3541E] text-[#FDF5E6] rounded-3xl font-heading text-lg hover:bg-[#333333] transition-all shadow-xl"
            >
              SHOW MORE BURGERS
            </button>
            <p className="mt-4 text-sm font-bold text-[#333333]/40 uppercase">
              Displaying {visibleCount} of {MENU_ITEMS.length} products
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;