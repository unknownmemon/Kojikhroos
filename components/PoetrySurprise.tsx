import React, { useState } from 'react';
import { Gift, Heart, X, Sparkles } from 'lucide-react';

const PoetrySurprise: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const lines = [
    "koi gham bhi teray pas na ho🥺",
    "Teri ankhen kbi udas no ho🥺",
    "kabi tanhai ka tujhe ehsas na ho🥺",
    "Tery honto pay kbi pyas na ho😘",
    "Tu Jo dua🤲 kara wo Puri ho😍",
    "Apno Sa kbi bhi na doori ho🥺❤",
    "Darpaish tujhe na majburi ho❤",
    "khuahishen Teri kbi na adhuri ho🥺❤",
    "Har pal tu khushbu main khilay😘😘",
    "Chamken Sada Din rat teryy😘",
    "khud ko kbi tanha na samajhna🥺❤",
    "Meri dua🤲 Hai sath tery😘",
    "Happy Birthdayyy Meryy jan🎂🎉🥳"
  ];

  return (
    <section className="py-24 bg-rose-50 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center">
        
        {!isOpen ? (
          <div className="text-center animate-[fadeIn_1s_ease-out]">
            <div className="mb-8 relative">
              <h2 className="font-script text-5xl text-rose-900 mb-2">A Special Surprise</h2>
              <p className="font-serif text-rose-700 italic">For the birthday boy...</p>
              <img src="https://media.tenor.com/Badu9k2FzBwAAAAi/dudu-bubu-flowers.gif" alt="Flowers" className="absolute -right-20 -bottom-10 w-24 h-24 hidden md:block" />
              <img src="https://media.tenor.com/ObCp1yJk4mAAAAAi/bubu-dudu-love.gif" alt="Love" className="absolute -left-20 top-0 w-20 h-20 hidden md:block" />
            </div>
            
            <button
              onClick={() => setIsOpen(true)}
              className="group relative w-72 h-52 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center overflow-hidden border-4 border-rose-200/50"
            >
               {/* Ribbon effect */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-8 h-full bg-rose-300/30 backdrop-blur-sm"></div>
                 <div className="absolute h-8 w-full bg-rose-300/30 backdrop-blur-sm"></div>
               </div>

              <Gift className="w-16 h-16 text-white mb-4 animate-bounce relative z-10 drop-shadow-md" />
              <div className="font-script text-3xl text-white relative z-10 drop-shadow-md group-hover:scale-110 transition-transform">
                Tap to Open
              </div>
              
              {/* Sparkles */}
              <Sparkles className="absolute top-4 right-4 text-yellow-200 w-6 h-6 animate-pulse" />
              <Sparkles className="absolute bottom-4 left-4 text-yellow-200 w-4 h-4 animate-pulse delay-75" />
            </button>
          </div>
        ) : (
          <div className="relative w-full max-w-2xl bg-[#fffcf7] p-8 md:p-12 rounded-sm shadow-2xl border-double border-8 border-rose-200 animate-[fadeIn_0.8s_ease-out] mx-4">
            {/* Paper texture overlay */}
            <div className="absolute inset-0 bg-rose-50/30 pointer-events-none opacity-50 mix-blend-multiply"></div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-rose-300 hover:text-rose-500 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10 text-center">
              <div className="flex justify-between items-center px-4">
                 <img src="https://media.tenor.com/2ce2r4j-rQoAAAAi/bubu-dudu-panda.gif" className="w-16 h-16 object-contain -scale-x-100" alt="Party" />
                 <Heart className="w-10 h-10 text-rose-500 mb-6 animate-pulse fill-rose-500 drop-shadow-sm" />
                 <img src="https://media.tenor.com/2ce2r4j-rQoAAAAi/bubu-dudu-panda.gif" className="w-16 h-16 object-contain" alt="Party" />
              </div>
              
              <h3 className="font-script text-4xl md:text-5xl text-rose-900 mb-10 drop-shadow-sm border-b border-rose-100 pb-4 mx-12">
                A Poetry for You
              </h3>
              
              <div className="space-y-4 font-serif text-lg md:text-xl text-rose-800 leading-relaxed italic">
                 {lines.map((line, index) => (
                   <p key={index} className={`hover:text-rose-600 transition-colors duration-300 ${index === lines.length - 1 ? 'font-bold text-2xl mt-8 font-script text-rose-600' : ''}`}>
                     {line}
                   </p>
                 ))}
              </div>

              <div className="mt-8 flex justify-center">
                 <img src="https://media.tenor.com/ManSP37yQZ0AAAAi/dudu-bubu.gif" alt="Hugging" className="w-24 h-24 object-contain" />
              </div>

              <div className="mt-6 flex justify-center gap-3 opacity-60">
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <div className="w-16 h-px bg-rose-300 self-center"></div>
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PoetrySurprise;