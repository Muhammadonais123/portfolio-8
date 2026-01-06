import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % EVENTS.length);
  const prev = () => setCurrent((current - 1 + EVENTS.length) % EVENTS.length);

  return (
    <section id="events" className="py-24 bg-[#FDF5E6] overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="bg-white p-6 md:p-12 rounded-[4rem] shadow-xl relative border-8 border-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={EVENTS[current].id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-[#B3541E] font-bold tracking-widest uppercase mb-2">Discover</p>
                <h2 className="font-heading text-4xl text-[#333333] mb-4">UPCOMING EVENTS</h2>
                <p className="text-lg text-[#B3541E] font-bold mb-4 drop-shadow-sm">{EVENTS[current].date}</p>
                <p className="text-[#333333]/70 leading-relaxed mb-8">
                  {EVENTS[current].description}
                </p>
                <div className="flex space-x-4">
                  <button onClick={prev} className="w-14 h-14 rounded-full border-2 border-[#B3541E] flex items-center justify-center text-[#B3541E] hover:bg-[#B3541E] hover:text-[#FDF5E6] transition-all shadow-md">
                    <ChevronLeft size={28} />
                  </button>
                  <button onClick={next} className="w-14 h-14 rounded-full border-2 border-[#B3541E] flex items-center justify-center text-[#B3541E] hover:bg-[#B3541E] hover:text-[#FDF5E6] transition-all shadow-md">
                    <ChevronRight size={28} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div 
                key={`img-${EVENTS[current].id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="rounded-[3rem] overflow-hidden aspect-video md:aspect-square border-4 border-[#FDF5E6] shadow-lg"
              >
                <img 
                  src={EVENTS[current].image} 
                  alt={EVENTS[current].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

          </div>
          
          <div className="flex justify-center md:justify-start space-x-3 mt-8">
            {EVENTS.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setCurrent(i)}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all ${i === current ? 'bg-[#B3541E] w-12' : 'bg-[#333333]/10'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;