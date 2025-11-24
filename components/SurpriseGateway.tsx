import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

interface SurpriseGatewayProps {
  onUnlock: () => void;
}

const SurpriseGateway: React.FC<SurpriseGatewayProps> = ({ onUnlock }) => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-rose-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#fecdd3 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
      
      {/* Extra Celebration Stickers */}
      <img src="https://media.tenor.com/uJzT4uGq6tcAAAAi/bubu-dudu-dance.gif" alt="Dance" className="absolute left-10 top-20 w-32 h-32 opacity-80 hidden md:block" />
      <img src="https://media.tenor.com/Badu9k2FzBwAAAAi/dudu-bubu-flowers.gif" alt="Flowers" className="absolute right-10 bottom-20 w-32 h-32 opacity-80 hidden md:block" />

      <div className="relative z-10 text-center animate-[fadeIn_1s_ease-out]">
        <div className="mb-12">
          <h2 className="font-script text-6xl text-rose-600 mb-4 drop-shadow-sm">
            A Special Gift
          </h2>
          <p className="font-serif text-2xl text-rose-800/80 italic flex items-center justify-center gap-2">
            I have so much more to tell you...
            <img src="https://media.tenor.com/q1sJk7C_tQAAAAAi/bubu-dudu-shy.gif" className="w-12 h-12" alt="Shy" />
          </p>
        </div>

        {/* Giant Gift Box Interaction */}
        <button 
          onClick={onUnlock}
          className="group relative w-72 h-72 mx-auto flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
        >
          {/* Animated Bear Sticker pointing/waiting */}
          <div className="absolute -top-24 right-0 transform translate-x-12 rotate-12 z-0 opacity-90 group-hover:scale-110 transition-transform">
             <img src="https://media.tenor.com/N6sLhV9N1HAAAAAi/dudu-bubu-excited.gif" alt="Excited" className="w-24 h-24" />
          </div>

          {/* Box Body */}
          <div className="absolute bottom-0 w-56 h-48 bg-rose-500 rounded-xl shadow-2xl z-10 group-hover:bg-rose-600 transition-colors flex justify-center items-center overflow-hidden border-4 border-rose-400/50">
            {/* Vertical Ribbon */}
            <div className="w-12 h-full bg-rose-200/90 shadow-sm"></div>
            {/* Horizontal Ribbon */}
            <div className="absolute h-12 w-full bg-rose-200/90 shadow-sm top-20"></div>
          </div>
          
          {/* Box Lid */}
          <div className="absolute bottom-44 w-64 h-14 bg-rose-600 rounded-lg shadow-lg z-20 group-hover:-translate-y-6 transition-transform duration-500 ease-in-out group-hover:rotate-3 origin-center border-b-4 border-rose-700">
            {/* Vertical Ribbon on Lid */}
             <div className="absolute left-1/2 -translate-x-1/2 w-12 h-full bg-rose-200/90"></div>
          </div>

          {/* The Bow Icon */}
          <div className="absolute bottom-[13.5rem] z-30 text-rose-400 drop-shadow-xl group-hover:-translate-y-8 transition-transform duration-500 group-hover:-rotate-6 origin-bottom">
             <Gift size={80} strokeWidth={1.5} className="text-rose-500 fill-rose-200" />
          </div>

          {/* Sparkles */}
          <Sparkles className="absolute top-0 right-0 text-yellow-400 w-8 h-8 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
          <Sparkles className="absolute bottom-20 left-0 text-yellow-400 w-6 h-6 animate-pulse delay-100 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Interaction Hint */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full whitespace-nowrap">
            <span className="font-sans text-rose-500 text-base tracking-[0.2em] uppercase font-bold animate-bounce flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              Tap to Unwrap <Sparkles className="w-4 h-4" />
            </span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default SurpriseGateway;