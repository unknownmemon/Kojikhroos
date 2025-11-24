import React, { useState } from 'react';
import { Mail, Heart, X, Stars } from 'lucide-react';

const SecondPoetrySurprise: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const lines = [
    "کوئی چاند ستارہ ہے ❤️‍🩹🌙",
    "کوئی پھولوں سے پیارا ہے 💫😊",
    "کوئی خوشی کا اشارہ ہے 🫵🏻💖",
    "کوئی دل کا سہارہ ہے 🫀🫶",
    "تمھے بس اتنا بتانا ہے🤗",
    "ہمیں جو جان سے پیارا ہے 🥳💖",
    "وہ نام تمہارا ہے 🫵🏻🫶🫀"
  ];

  return (
    <section className="py-24 bg-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center">
        
        {!isOpen ? (
          <div className="text-center animate-[fadeIn_1s_ease-out]">
            <div className="mb-8 relative">
              <h2 className="font-script text-5xl text-rose-900 mb-2">One More Thing...</h2>
              <p className="font-serif text-rose-700 italic">A secret message has arrived.</p>
              <img src="https://media.tenor.com/ObCp1yJk4mAAAAAi/bubu-dudu-love.gif" className="w-16 h-16 absolute -top-10 -right-6 animate-pulse hidden md:block" alt="Hearts" />
              <img src="https://media.tenor.com/tHq4X2d1tQAAAAAi/bubu-dudu-shy.gif" className="w-16 h-16 absolute -bottom-4 -left-10 animate-pulse hidden md:block" alt="Shy" />
            </div>
            
            <button
              onClick={() => setIsOpen(true)}
              className="group relative w-72 h-48 bg-white border-4 border-rose-200 rounded-xl shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Envelope pattern background */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-500 to-transparent"></div>
              
              <Mail className="w-16 h-16 text-rose-500 mb-4 animate-pulse relative z-10 drop-shadow-sm group-hover:scale-110 transition-transform" />
              <div className="font-script text-3xl text-rose-800 relative z-10 group-hover:text-rose-600 transition-colors">
                Read Me
              </div>
              
              <Stars className="absolute top-3 right-3 text-yellow-400 w-5 h-5 animate-spin-slow" />
            </button>
          </div>
        ) : (
          <div className="relative w-full max-w-2xl bg-[#fffcf7] p-6 md:p-12 rounded-lg shadow-2xl border border-rose-100 animate-[fadeIn_0.8s_ease-out] mx-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
             {/* Decorative tape */}
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-200/50 backdrop-blur-sm transform -rotate-2 z-20"></div>

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-rose-300 hover:text-rose-500 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6 relative">
                 <span className="text-4xl">💌</span>
                 <img src="https://media.tenor.com/19J8_Fq2y4EAAAAC/bubu-dudu-kisses.gif" alt="Kiss" className="w-16 h-16 absolute -right-10 -top-4 object-contain" />
              </div>
              
              <h3 className="font-script text-4xl md:text-5xl text-rose-900 mb-10 border-b-2 border-rose-100 pb-4 inline-block">
                Dil Ki Baat
              </h3>
              
              <div className="space-y-6 font-serif text-xl md:text-3xl text-rose-800 leading-relaxed" dir="rtl">
                 {lines.map((line, index) => (
                   <p key={index} className="hover:text-rose-600 transition-colors duration-300 drop-shadow-sm">
                     {line}
                   </p>
                 ))}
              </div>

              <div className="mt-12 flex justify-center items-center gap-2 text-rose-400">
                <Heart className="w-5 h-5 fill-rose-400 animate-bounce" />
                <span className="font-script text-xl">Yours Forever</span>
                <Heart className="w-5 h-5 fill-rose-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
              
              <div className="flex justify-center mt-4">
                 <img src="https://media.tenor.com/g9k8aM8b_QoAAAAC/bubu-dudu-hug.gif" alt="Hugging" className="w-16 h-16 opacity-80" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SecondPoetrySurprise;