import React from 'react';
import { motion } from 'framer-motion';

const FeaturedGrid: React.FC = () => {
  return (
    <section className="py-20 bg-[#FDF5E6] px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Main Large Card */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden rounded-[3rem] h-[500px] md:h-[600px] cursor-pointer shadow-xl border-8 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop" 
              alt="Most Popular"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/90 via-[#333333]/30 to-transparent p-10 flex flex-col justify-end">
              <p className="text-[#B3541E] font-bold tracking-widest mb-2 uppercase drop-shadow-sm">Try it today</p>
              <h3 className="text-white font-heading text-4xl mb-4">MOST POPULAR <br /> BURGER</h3>
              <a href="#menu" className="w-fit px-8 py-3 bg-[#B3541E] text-[#FDF5E6] rounded-2xl font-bold hover:bg-[#8e4218] transition-all">
                BROWSE ALL
              </a>
            </div>
          </motion.div>

          {/* Side Cards Container */}
          <div className="flex flex-col gap-8">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group overflow-hidden rounded-[3rem] h-[284px] cursor-pointer shadow-lg border-8 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop" 
                alt="Fresh & Chili"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#333333]/40 p-8 flex flex-col justify-center">
                <p className="text-[#B3541E] font-bold tracking-widest mb-1 uppercase text-sm">New Taste</p>
                <h3 className="text-white font-heading text-3xl">FRESH & CHILI</h3>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group overflow-hidden rounded-[3rem] h-[284px] cursor-pointer shadow-lg border-8 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" 
                alt="More Taste"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#333333]/40 p-8 flex flex-col justify-center">
                <p className="text-[#FDF5E6] font-bold tracking-widest mb-1 uppercase text-sm">Chef's Choice</p>
                <h3 className="text-white font-heading text-3xl">MORE TASTE</h3>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;