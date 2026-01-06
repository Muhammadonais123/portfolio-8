import React from 'react';
import { motion } from 'framer-motion';

const Reservation: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your table has been requested.');
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden px-6 bg-[#FDF5E6]">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[#B3541E]/5 rounded-l-[10rem] -z-10" />
      
      <div className="container mx-auto text-center">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="mb-16"
        >
          <p className="text-[#B3541E] font-bold tracking-widest uppercase mb-2">Reservation</p>
          <h2 className="font-heading text-5xl text-[#333333]">BOOK YOUR TABLE</h2>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl relative border-8 border-white"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#333333]/40 ml-2 uppercase">Full Name</label>
              <input type="text" placeholder="John Doe" required className="w-full bg-[#FDF5E6]/40 border-2 border-transparent focus:border-[#B3541E] outline-none rounded-[1.5rem] px-6 py-4 text-[#333333] font-medium transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#333333]/40 ml-2 uppercase">Email Address</label>
              <input type="email" placeholder="john@example.com" required className="w-full bg-[#FDF5E6]/40 border-2 border-transparent focus:border-[#B3541E] outline-none rounded-[1.5rem] px-6 py-4 text-[#333333] font-medium transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#333333]/40 ml-2 uppercase">Preferred Date</label>
              <input type="date" required className="w-full bg-[#FDF5E6]/40 border-2 border-transparent focus:border-[#B3541E] outline-none rounded-[1.5rem] px-6 py-4 text-[#333333] font-medium transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#333333]/40 ml-2 uppercase">Guest Count</label>
              <input type="number" placeholder="2" min="1" required className="w-full bg-[#FDF5E6]/40 border-2 border-transparent focus:border-[#B3541E] outline-none rounded-[1.5rem] px-6 py-4 text-[#333333] font-medium transition-all" />
            </div>
            <div className="md:col-span-2 mt-4">
              <button type="submit" className="w-full bg-[#B3541E] text-[#FDF5E6] font-heading text-2xl rounded-[2rem] py-5 shadow-xl hover:bg-[#8e4218] transition-all transform hover:scale-[1.01] active:scale-95">
                FIND A TABLE
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;