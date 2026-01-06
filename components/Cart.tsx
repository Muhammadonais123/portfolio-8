import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#333333]/60 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#FDF5E6] shadow-2xl z-[70] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-heading text-3xl text-[#333333]">YOUR ORDER</h2>
              <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors text-[#333333]">
                <X size={28} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto space-y-6 pr-2">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-[#333333]/40 space-y-4">
                  <ShoppingBag size={64} strokeWidth={1} />
                  <p className="font-heading text-lg text-[#333333]">YOUR BAG IS EMPTY</p>
                  <button 
                    onClick={onClose}
                    className="text-[#B3541E] font-bold underline underline-offset-4 hover:opacity-70 transition-colors"
                  >
                    Start adding burgers
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white p-4 rounded-3xl shadow-sm border border-[#333333]/5">
                    <img src={item.image} className="w-20 h-20 rounded-2xl object-cover" alt={item.name} />
                    <div className="flex-grow">
                      <h4 className="font-bold text-[#333333] text-sm line-clamp-1">{item.name}</h4>
                      <p className="text-[#B3541E] font-heading text-lg">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 rounded-lg bg-[#B3541E]/10 text-[#B3541E] hover:bg-[#B3541E] hover:text-[#FDF5E6] transition-colors"><Minus size={14}/></button>
                        <span className="font-bold text-sm text-[#333333]">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 rounded-lg bg-[#B3541E]/10 text-[#B3541E] hover:bg-[#B3541E] hover:text-[#FDF5E6] transition-colors"><Plus size={14}/></button>
                      </div>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-[#333333]/20 hover:text-[#B3541E] transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="mt-8 pt-8 border-t-2 border-[#333333]/10 space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold opacity-50 uppercase tracking-widest text-[#333333]">Total Amount</span>
                  <span className="text-4xl font-heading text-[#333333]">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-[#B3541E] text-[#FDF5E6] py-5 rounded-[2rem] font-heading text-xl shadow-lg hover:bg-[#8e4218] transition-all active:scale-95">
                  CHECKOUT NOW
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; export default Cart;