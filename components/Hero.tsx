import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#FDF5E6]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-block px-4 py-1 bg-[#B3541E]/10 text-[#B3541E] rounded-full text-sm font-bold mb-6 tracking-widest uppercase">
            The Best Burger in Town
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-[#333333] leading-tight mb-6">
            BURGER <br />
            <span className="text-[#B3541E]">WEEK</span>
          </h1>
          <p className="text-lg text-[#333333]/80 mb-8 max-w-md leading-relaxed">
            Experience the perfect blend of vintage taste and modern gourmet craftsmanship. Every bite is a journey through flavor.
          </p>
          <div className="flex items-center space-x-8">
            <a href="#menu" className="bg-[#B3541E] text-[#FDF5E6] px-10 py-5 rounded-3xl font-heading text-xl shadow-lg hover:bg-[#8e4218] transition-all transform hover:-translate-y-1 block text-center">
              EXPLORE MENU
            </a>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#333333]/40 uppercase tracking-tighter">Starting at</span>
              <span className="font-heading text-3xl text-[#B3541E]">$5.90</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <motion.div className="relative">
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop" 
              alt="Hero Burger"
              className="w-full max-w-lg rounded-[3rem] shadow-2xl z-10 border-8 border-white"
            />
            
            {/* Price Badge - Smaller and in the corner */}
            <motion.div 
              initial={{ scale: 0, rotate: 20 }}
              animate={{ scale: 1, rotate: 15 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -top-6 -right-6 md:top-2 md:-right-2 z-20 w-24 h-24 bg-[#B3541E] text-[#FDF5E6] rounded-full flex flex-col items-center justify-center border-4 border-[#FDF5E6] shadow-lg transform"
            >
              <span className="text-[10px] font-bold uppercase leading-none">Only</span>
              <span className="text-xl font-heading">$5.49</span>
            </motion.div>
          </motion.div>

          {/* Abstract Decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[#B3541E]/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;