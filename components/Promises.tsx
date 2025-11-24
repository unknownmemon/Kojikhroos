import React, { useState } from 'react';
import { Heart, Flower, Check, Sparkles, X } from 'lucide-react';

const Promises: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const promisesList = [
    "I promise Mn hmesha apkyy sth rhoongy😘❤",
    "Sath reh kr bht sara tng bh kroongy🤭😉😉",
    "Apka bhrosa tbhi totny nh doongy🤝🥺",
    "Apky lye mn sb s lar loongy apnyy family s bh🥺❤",
    "Apki har khuwaish poori kroongy😘❤💋",
    "Apko bht sara pyar doongy kbhi apny pyar mn kamii nh aane doongy🙈👀❤",
    "Hmry beech kbhi kisi ko nh aane doongy😩❤",
    "Laraii to kroongy pr usyy hm milkr solve krlengy pr kbhi apka sath nh chorongy🌸❤",
    "Hmesha sirf apkii rhoongy💋💋",
    "Apky lye mjh kch bh krna para mn kroongy jesyy ka khana pakana safaii kapry dhona apky ghr wlon ka khyl rkhna or bh bht kch jo jo hoga apky lye sb kroongy I promise🤭😉❤❤"
  ];

  return (
    <section className="py-24 bg-[#fff0f5] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background floral patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
        <Flower className="w-full h-full text-rose-400 animate-spin-slow" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <Flower className="w-full h-full text-rose-400 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
        
        {!isOpen ? (
          <div className="text-center animate-[fadeIn_1s_ease-out]">
            <div className="mb-8 relative">
              <h2 className="font-script text-5xl text-rose-900 mb-2">My Promises</h2>
              <p className="font-serif text-rose-700 italic">To you, forever...</p>
              <img src="https://media.tenor.com/Badu9k2FzBwAAAAi/dudu-bubu-flowers.gif" alt="Flowers" className="w-20 h-20 absolute -left-10 top-0 hidden md:block" />
              <img src="https://media.tenor.com/uJzT4uGq6tcAAAAi/bubu-dudu-dance.gif" alt="Dance" className="w-20 h-20 absolute -right-10 bottom-0 hidden md:block" />
            </div>
            
            <button
              onClick={() => setIsOpen(true)}
              className="group relative w-64 h-64 rounded-full bg-gradient-to-tr from-rose-300 to-rose-500 shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col items-center justify-center border-8 border-white"
            >
               <div className="absolute inset-0 rounded-full border-4 border-rose-200 border-dashed animate-spin-slow"></div>

              <Heart className="w-24 h-24 text-white fill-white mb-2 animate-pulse drop-shadow-md" />
              <div className="font-script text-3xl text-white relative z-10 drop-shadow-md">
                Open My Heart
              </div>
              
              <Flower className="absolute -top-2 -right-2 text-white w-10 h-10 animate-bounce" />
              <Flower className="absolute -bottom-2 -left-2 text-white w-8 h-8 animate-bounce delay-100" />
            </button>
          </div>
        ) : (
          <div className="relative w-full max-w-3xl bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-rose-200 animate-[zoomIn_0.6s_ease-out] mx-4">
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-rose-400 hover:text-rose-600 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="flex justify-center gap-4 mb-4 items-center">
                   <img src="https://media.tenor.com/2ce2r4j-rQoAAAAi/bubu-dudu-panda.gif" className="w-12 h-12 object-contain hidden md:block" alt="Party" />
                   <Flower className="w-8 h-8 text-rose-400" />
                   <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
                   <Flower className="w-8 h-8 text-rose-400" />
                   <img src="https://media.tenor.com/2ce2r4j-rQoAAAAi/bubu-dudu-panda.gif" className="w-12 h-12 object-contain -scale-x-100 hidden md:block" alt="Party" />
                </div>
                <h3 className="font-script text-4xl md:text-5xl text-rose-900 border-b-2 border-rose-100 pb-4 inline-block">
                  My Vows to You
                </h3>
              </div>
              
              <div className="space-y-6">
                 {promisesList.map((promise, index) => (
                   <div key={index} className="flex items-start group hover:bg-rose-50 p-3 rounded-lg transition-colors border-b border-rose-100/50">
                     <div className="flex-shrink-0 mt-1 mr-4">
                       <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 group-hover:bg-rose-200 transition-colors shadow-sm relative overflow-hidden">
                         {/* Balloon Icon */}
                         <div className={`absolute w-full h-full bg-opacity-20 ${index % 2 === 0 ? 'bg-blue-300' : 'bg-pink-300'}`}></div>
                         <span className="font-script text-lg relative z-10">🎈</span>
                       </div>
                     </div>
                     <p className="font-serif text-lg md:text-xl text-rose-900 leading-relaxed">
                       {promise}
                     </p>
                   </div>
                 ))}
              </div>

              <div className="mt-12 text-center space-y-4 relative">
                 <p className="font-script text-2xl text-rose-600 animate-pulse">
                   Umaaaaaaaaaaaah💋💋💋💋💋💋💋💋💋
                 </p>
                 <p className="font-bold text-lg text-rose-800 tracking-wide">
                   Love you sooo much Mry jan❤🙈😘🤭🙈💋💋
                 </p>
                 
                 <div className="flex justify-center gap-2 mt-4">
                   <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
                   <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" style={{ animationDelay: '0.5s'}} />
                 </div>
                 
                 <div className="flex justify-center">
                    <img src="https://media.tenor.com/19J8_Fq2y4EAAAAC/bubu-dudu-kisses.gif" className="w-16 h-16 opacity-80" alt="Kiss" />
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Promises;