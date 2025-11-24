import React from 'react';
import { Heart, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const el = document.getElementById('time-together');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-rose-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Birthday Stickers - EXTRA ADDED */}
      <div className="absolute top-10 left-4 md:left-10 animate-bounce" style={{ animationDuration: '3s' }}>
         <img src="https://media.tenor.com/StopZ_hZl-EAAAAi/bubu-dudu.gif" alt="Party" className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-90" />
      </div>
      <div className="absolute top-20 right-4 md:right-10 animate-bounce" style={{ animationDuration: '4s' }}>
         <img src="https://media.tenor.com/uJzT4uGq6tcAAAAi/bubu-dudu-dance.gif" alt="Dance" className="w-20 h-20 md:w-28 md:h-28 object-contain opacity-90" />
      </div>
      <div className="absolute bottom-20 left-10 animate-pulse hidden md:block">
         <img src="https://media.tenor.com/2ce2r4j-rQoAAAAi/bubu-dudu-panda.gif" alt="Party Blower" className="w-24 h-24 object-contain" />
      </div>
      <div className="absolute bottom-40 right-10 animate-pulse hidden md:block" style={{ animationDelay: '1s' }}>
         <img src="https://media.tenor.com/839Fq4w8t84AAAAi/bubu-dudu.gif" alt="Love" className="w-24 h-24 object-contain" />
      </div>

      <div className="z-10 text-center px-6 max-w-4xl mx-auto relative">
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-white/50 backdrop-blur-sm shadow-sm border border-rose-100">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 mr-2 animate-pulse" />
          <span className="text-rose-800 text-sm font-medium tracking-widest uppercase">My Khroosman</span>
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 ml-2 animate-pulse" />
        </div>

        {/* Main Center Sticker */}
        <div className="flex justify-center mb-6">
          <img 
            src="https://media.tenor.com/n14aVl4y9w4AAAAi/bubu-dudu-panda.gif" 
            alt="Dudu Bubu Love" 
            className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-md animate-bounce"
          />
        </div>

        <h1 className="font-script text-7xl md:text-9xl text-rose-900 mb-8 drop-shadow-sm leading-tight">
          Happy Birthday Hamza
        </h1>
        
        <div className="font-serif text-xl md:text-2xl text-rose-700/80 italic max-w-2xl mx-auto leading-relaxed space-y-2">
          <p>Murshad "Aj uska janamdin h"</p>
          <p>"Jis sa mra har din ha" 🙈💋💋</p>
        </div>

        <div className="mt-12">
           <button 
            onClick={scrollToContent}
            className="group flex flex-col items-center text-rose-400 hover:text-rose-600 transition-colors duration-300 cursor-pointer"
           >
             <span className="text-sm uppercase tracking-widest mb-2">Begin Our Journey</span>
             <ChevronDown className="w-6 h-6 animate-bounce" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;