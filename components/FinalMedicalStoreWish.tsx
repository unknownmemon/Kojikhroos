import React, { useState } from 'react';
import { Heart, Activity, Stethoscope, X, Pill } from 'lucide-react';

const FinalMedicalStoreWish: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 bg-rose-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Heartbeat Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <Activity className="w-full h-32 text-rose-500 animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
        
        {!isOpen ? (
          <div className="text-center animate-[fadeIn_1s_ease-out]">
            <div className="mb-10 relative">
              <h2 className="font-script text-5xl text-rose-900 mb-2">Vital Signs</h2>
              <p className="font-serif text-rose-600 italic">My heart needs this...</p>
              
              <img src="https://media.tenor.com/2ce2r4j-rQoAAAAi/bubu-dudu-panda.gif" className="absolute -left-20 top-0 w-24 h-24 hidden md:block" alt="Party" />
              <img src="https://media.tenor.com/ObCp1yJk4mAAAAAi/bubu-dudu-love.gif" className="absolute -right-20 bottom-0 w-24 h-24 hidden md:block" alt="Love" />
            </div>
            
            <button
              onClick={() => setIsOpen(true)}
              className="group relative w-64 h-64 rounded-full bg-white shadow-[0_0_60px_rgba(244,63,94,0.4)] cursor-pointer hover:scale-105 transition-all duration-500 flex flex-col items-center justify-center border-4 border-rose-200"
            >
               {/* Heartbeat Animation */}
               <div className="absolute inset-0 rounded-full border-4 border-rose-100 animate-ping opacity-20"></div>
               
               <Heart className="w-24 h-24 text-rose-500 fill-rose-500 animate-beat drop-shadow-lg mb-2" />

              <div className="font-script text-3xl text-rose-800 relative z-10 group-hover:text-rose-600 transition-colors">
                My Lifeline
              </div>
              
              <Activity className="absolute bottom-10 text-rose-400 w-12 h-12" />
            </button>
          </div>
        ) : (
          <div className="relative w-full max-w-3xl bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-rose-100 animate-[zoomIn_0.6s_ease-out] mx-4 overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-4 bg-rose-200/50"></div>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-rose-200/50"></div>

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 bg-rose-100 rounded-full text-rose-500 hover:bg-rose-200 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10 text-center">
              <div className="flex justify-center items-center gap-3 mb-8">
                 <Stethoscope className="w-8 h-8 text-rose-400" />
                 <span className="font-serif text-rose-300 tracking-widest uppercase text-sm">Diagnosis: Crazy in Love</span>
                 <Pill className="w-8 h-8 text-rose-400" />
              </div>
              
              <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100 relative mb-8">
                 {/* Sticker */}
                 <img src="https://media.tenor.com/tHq4X2d1tQAAAAAi/bubu-dudu-shy.gif" className="w-20 h-20 absolute -top-10 -right-4" alt="Shy" />
                 
                 <div className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
                    <p className="font-bold text-2xl text-rose-600">
                      To Aj Mryy medical store ki Birthdayy ha👀💋
                    </p>
                    
                    <p className="italic text-rose-400 font-serif text-lg">Matlab...</p>
                    
                    <p>
                      Yeh banda na na hota🥺<br/>
                      Mn abhi tk pagal hojana tha😩😂
                    </p>
                    
                    <p>
                      Q k pagal hony k sryyy asar😜<br/>
                      Mjh apnyy andr nzr aarhy th😂😂
                    </p>
                    
                    <p>
                      Or yeh wahid bnda ha💋🤭<br/>
                      Jo bechara chup krke😉🙊<br/>
                      Mryy bak bak sun leta🙈😁🤭
                    </p>
                    
                    <div className="py-4">
                       <p className="font-script text-4xl text-rose-500 animate-pulse">
                         Too janiii Oyyyyyyy👀🤭
                       </p>
                       <p className="font-bold text-3xl text-rose-700 mt-2">
                         Happy Birthday Yar🎊🎉🎂🎈🎁
                       </p>
                    </div>

                    <p>
                      Baki...Allah tujhyy Har bala s mehfooz rkhy siwae mryyy😂😂<br/>
                      <span className="font-bold text-xl text-rose-600">Ameeeeeen🙈💋😉</span>
                    </p>
                 </div>
              </div>

              <div className="relative">
                 <img src="https://media.tenor.com/19J8_Fq2y4EAAAAC/bubu-dudu-kisses.gif" className="w-24 h-24 mx-auto mb-4" alt="Kisses" />
                 
                 <p className="font-script text-3xl md:text-4xl text-rose-600 mb-2">
                   Again Happpy Birthdayyy khrooos🎂🎉🎉
                 </p>
                 <p className="font-bold text-rose-500">
                   I love you sooo much 💋💋💋💋
                 </p>
                 <p className="text-xs text-rose-300 mt-4 tracking-widest uppercase">
                   Umaaaaaaaaaaaaaah💋💋💋💋💋💋💋💋💋
                 </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinalMedicalStoreWish;