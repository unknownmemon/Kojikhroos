import React, { useState } from 'react';
import { Hourglass, Heart, X, Infinity, Clock } from 'lucide-react';

const EverySecondLove: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const lines = [
    "❥𝖨 𝖨𝖮𝗏𝖾 𝗒𝖮𝗎 𝖾𝗏𝖾𝗋𝖸 𝗌𝖾𝖼𝖮𝗇𝖽🤌🏻❤️✨",
    "❥𝖨 𝗅𝖮𝗏𝖾 𝗒𝖮𝗎 𝖾𝗏𝖾𝗋𝖸 𝗆𝗂𝗇𝖴𝗍𝖾🖇️🌼✨",
    "❥𝖨 𝗅𝖮𝗏𝖾 𝗒𝖮𝗎 𝖾𝗏𝖾𝗋𝖸 𝗁𝖮𝗎𝗋🥹👀🫶🏻",
    "❥𝖨 𝖨𝖮𝗏𝖾 𝗒𝖮𝗎 𝖾𝗏𝖾𝗋𝖸 𝗍𝗂𝖬𝖾🖇️💋🤌🏻",
    "❥𝖨 𝗅𝖮𝗏𝖾 𝗒𝖮𝗎 𝖾𝗏𝖾𝗋𝖸 𝖽𝖺𝖸👀❤️🫀",
    "❥𝖨 𝗅𝖮𝗏𝖾 𝗒𝖮𝗎 𝖾𝗏𝖾𝗋𝖸 𝗐𝖾𝖾𝖪🖇️🌙✨",
    "❥𝖨 𝗅𝖮𝗏𝖾 𝗒𝖮𝗎 𝖾𝗏𝖾𝗋𝖸 𝗆𝗈𝗇𝗍𝖧🌸🦋🫶🏻",
    "❥𝖨 𝗅𝖮𝗏𝖾 𝗒𝖮𝗎 𝗌𝖮𝗈𝗈𝗈𝗈 𝗆𝗎𝖢𝗁𝗁𝗁𝗁𝗁𝗁........😩❤🤭",
    "❥𝖨 𝗅𝖮𝗏𝖾 𝗒𝖮𝗎 𝗆𝗈𝖱𝖾 𝗍𝗁𝖺𝖭 𝗆𝗈𝖲𝗍 𝖨 𝗅𝖮𝗏𝖾 𝗒𝖮𝗎 𝗆𝗈𝖱𝖾 𝗍𝗁𝖺𝖭 𝗆𝗎𝖢𝗁𝗁𝗁𝗁🥺💗"
  ];

  return (
    <section className="py-24 bg-rose-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background time elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <Clock className="absolute top-10 left-10 w-32 h-32 text-rose-400 animate-spin-slow" style={{ animationDuration: '20s' }} />
        <Clock className="absolute bottom-10 right-10 w-48 h-48 text-rose-400 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
        
        {!isOpen ? (
          <div className="text-center animate-[fadeIn_1s_ease-out]">
            <div className="mb-8 relative">
              <h2 className="font-script text-5xl text-rose-900 mb-2">Timeless Love</h2>
              <p className="font-serif text-rose-700 italic">Open for one final truth...</p>
              <img src="https://media.tenor.com/N6sLhV9N1HAAAAAi/dudu-bubu-excited.gif" className="w-16 h-16 absolute -right-6 top-0 hidden md:block" alt="Excited" />
              <img src="https://media.tenor.com/zK3_7pIqFqAAAAAi/bubu-dudu.gif" className="w-16 h-16 absolute -left-6 bottom-0 hidden md:block" alt="Waiting" />
            </div>
            
            <button
              onClick={() => setIsOpen(true)}
              className="group relative w-64 h-64 rounded-full bg-white border-8 border-rose-300 shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-rose-50 opacity-50 group-hover:opacity-30 transition-opacity"></div>
              
              {/* Hourglass Icon */}
              <Hourglass className="w-20 h-20 text-rose-500 mb-4 animate-pulse relative z-10" />
              
              <div className="font-script text-3xl text-rose-800 relative z-10 group-hover:text-rose-600 transition-colors">
                Every Moment
              </div>
              
              {/* Orbiting Heart */}
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '8s' }}>
                <Heart className="w-6 h-6 text-rose-400 fill-rose-400 absolute top-4 left-1/2 -translate-x-1/2" />
              </div>
            </button>
          </div>
        ) : (
          <div className="relative w-full max-w-2xl bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-2xl border-4 border-rose-200 animate-[zoomIn_0.6s_ease-out] mx-4">
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-rose-400 hover:text-rose-600 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10 text-center">
              <div className="flex justify-center items-center gap-2 mb-8 text-rose-500">
                <Infinity className="w-8 h-8" />
                <Heart className="w-6 h-6 fill-rose-500 animate-beat" />
                <Infinity className="w-8 h-8" />
              </div>
              
              <div className="flex justify-center mb-6">
                 <img src="https://media.tenor.com/ManSP37yQZ0AAAAi/dudu-bubu.gif" className="w-20 h-20" alt="Hugging" />
              </div>

              <div className="space-y-4 mb-10">
                 {lines.map((line, index) => (
                   <div key={index} className="font-medium text-lg md:text-xl text-rose-900 leading-loose hover:scale-105 transition-transform duration-300">
                     {line}
                   </div>
                 ))}
              </div>

              <div className="pt-6 border-t border-rose-100">
                 <p className="font-script text-4xl text-rose-600 animate-pulse">
                   Mera bachawww💋💋💋💋💋
                 </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EverySecondLove;