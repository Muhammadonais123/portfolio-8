import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FDF5E6]/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#B3541E] rounded-2xl flex items-center justify-center text-[#FDF5E6]">
            <ShoppingBag size={24} />
          </div>
          <span className="font-heading text-2xl text-[#333333]">BURGER HOUSE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-[#333333] font-semibold">
          <a href="#" className="hover:text-[#B3541E] transition-colors">HOME</a>
          <a href="#menu" className="hover:text-[#B3541E] transition-colors">MENU</a>
          <a href="#events" className="hover:text-[#B3541E] transition-colors">EVENTS</a>
          <a href="#booking" className="hover:text-[#B3541E] transition-colors">BOOKING</a>
        </nav>

        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center text-[#333333]/80">
            <Phone size={18} className="mr-2 text-[#B3541E]" />
            <span className="font-bold text-[#333333]">+1 234 567 890</span>
          </div>
          
          <button 
            onClick={onCartToggle}
            className="relative p-2 bg-white text-[#333333] rounded-2xl border-2 border-[#333333]/10 hover:border-[#B3541E] hover:text-[#B3541E] transition-all"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#B3541E] text-[#FDF5E6] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg border border-[#333333]/10">
                {cartCount}
              </span>
            )}
          </button>

          <button className="md:hidden text-[#333333]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FDF5E6] absolute top-full left-0 right-0 border-t-2 border-[#333333]/10 shadow-xl p-6 flex flex-col space-y-4 text-center font-heading">
          <a href="#" className="text-xl text-[#333333]" onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="#menu" className="text-xl text-[#333333]" onClick={() => setIsMenuOpen(false)}>MENU</a>
          <a href="#events" className="text-xl text-[#333333]" onClick={() => setIsMenuOpen(false)}>EVENTS</a>
          <a href="#booking" className="text-xl text-[#333333]" onClick={() => setIsMenuOpen(false)}>BOOKING</a>
        </div>
      )}
    </header>
  );
};

export default Header;