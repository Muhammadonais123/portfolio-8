import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, ShoppingBag } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] text-[#FDF5E6] py-20 rounded-t-[5rem]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#B3541E] rounded-2xl flex items-center justify-center text-[#FDF5E6]">
              <ShoppingBag size={24} />
            </div>
            <span className="font-heading text-2xl text-[#FDF5E6]">BURGER HOUSE</span>
          </div>
          <p className="text-[#FDF5E6]/60 leading-relaxed text-sm">
            Crafting the finest gourmet burgers since 1995. Quality ingredients, vintage vibes, and a warm cream atmosphere.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#B3541E] transition-all text-[#FDF5E6]"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#B3541E] transition-all text-[#FDF5E6]"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#B3541E] transition-all text-[#FDF5E6]"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-heading text-xl text-[#B3541E]">CONTACT</h4>
          <ul className="space-y-4 text-[#FDF5E6]/60 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="text-[#B3541E] shrink-0" size={18} />
              <span>123 Gourmet Ave, BT 5678</span>
            </li>
            <li className="flex items-start space-x-3">
              <Mail className="text-[#B3541E] shrink-0" size={18} />
              <span>hello@burgerhouse.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-heading text-xl text-[#B3541E]">LINKS</h4>
          <ul className="space-y-3 text-[#FDF5E6]/60 text-sm">
            <li><a href="#" className="hover:text-[#B3541E] transition-colors">About Us</a></li>
            <li><a href="#menu" className="hover:text-[#B3541E] transition-colors">Our Menu</a></li>
            <li><a href="#events" className="hover:text-[#B3541E] transition-colors">Events</a></li>
            <li><a href="#booking" className="hover:text-[#B3541E] transition-colors">Reservations</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-heading text-xl text-[#B3541E]">JOIN US</h4>
          <p className="text-[#FDF5E6]/60 text-xs">Stay updated with our latest creations.</p>
          <div className="flex bg-white/5 p-1 rounded-2xl">
            <input type="email" placeholder="EMAIL" className="bg-transparent border-none outline-none px-4 py-2 w-full text-[#FDF5E6] text-xs" />
            <button className="bg-[#B3541E] text-[#FDF5E6] px-4 py-2 rounded-xl hover:bg-[#8e4218] transition-all text-xs font-bold uppercase">Go</button>
          </div>
        </div>

      </div>
      
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-[#FDF5E6]/20 text-[10px] tracking-widest font-bold">
        &copy; 2024 GOURMET BURGER HOUSE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}; export default Footer;