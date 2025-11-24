import React, { useState } from 'react';
import { Crown, Heart, X, Feather, Star } from 'lucide-react';

const SoulmateLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 bg-[#fffaf0] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Royal Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
        
        {!isOpen ? (
          <div className="text-center animate-[fadeIn_1s_ease-out]">
            <div className="mb-10 relative">
              <h2 className="font-script text-5xl text-rose-900 mb-2">My King</h2>
              <p className="font-serif text-amber-700 italic">A royal declaration of love...</p>
              <img src="https://media.tenor.com/g9k8aM8b_QoAAAAC/bubu-dudu-hug.gif" className="absolute -left-16 top-0 w-20 h-20 hidden md:block" alt="Hug" />
              <img src="https://media.tenor.com/ObCp1yJk4mAAAAAi/bubu-dudu-love.gif" className="absolute -right-16 bottom-0 w-20 h-20 hidden md:block" alt="Love" />
            </div>
            
            <button
              onClick={() => setIsOpen(true)}
              className="group relative w-64 h-64 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 shadow-[0_10px_40px_-10px_rgba(217,119,6,0.5)] cursor-pointer hover:scale-105 transition-all duration-500 flex flex-col items-center justify-center border-4 border-amber-300"
            >
               {/* Wax Seal Effect */}
               <div className="absolute inset-2 rounded-full border border-amber-200/50"></div>
               
               <div className="relative z-10 bg-rose-700 w-32 h-32 rounded-full shadow-inner flex items-center justify-center mb-4 group-hover:bg-rose-600 transition-colors">
                 <div className="absolute inset-0 rounded-full border-4 border-rose-800 opacity-50"></div>
                 <Crown className="w-16 h-16 text-amber-100" />
               </div>

              <div className="font-script text-3xl text-amber-800 relative z-10 group-hover:text-amber-600 transition-colors">
                Read Decree
              </div>
              
              <Feather className="absolute -right-4 bottom-8 text-rose-400 w-12 h-12 rotate-12 animate-pulse" />
            </button>
          </div>
        ) : (
          <div className="relative w-full max-w-3xl bg-[#fffdf5] p-8 md:p-12 rounded-lg shadow-2xl border-y-8 border-double border-amber-200 animate-[zoomIn_0.7s_ease-out] mx-4">
            {/* Corner Ornaments */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-300 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-300 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-300 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-300 rounded-br-3xl"></div>

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-amber-400 hover:text-amber-600 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <Crown className="w-10 h-10 text-amber-500 fill-amber-100" />
              </div>
              
              {/* English Section */}
              <div className="font-sans text-lg md:text-xl text-slate-800 leading-relaxed space-y-4 mb-8">
                <p>𝗛𝘢ρρ𝗒 𝗕ⅈ𝔯𝘵һ𝒹ɑ𝑦 ｍ𝑦 𝘭օv𝔯, ｍ𝑦 һ𝑒ɑ𝑟𝑡, ｍ𝑦 𝓼𝗈υ𝗹 💍❤️</p>
                <p>𝗬𝗈υ ɑ𝗿𝑒 𝗻օ𝗍 𝗷υ𝘀𝗍 ｍ𝑦 ρɑ𝗋𝗍𝗇𝑒𝗋, 𝗒𝗈υ ɑ𝗿𝑒 ｍ𝑦 ԁ𝗿𝑒ɑｍ, ｍ𝑦 һ𝗈ρ𝑒, ｍ𝑦 ԁ𝑒𝘀𝗍𝗂𝗇𝗒 ✨🌎</p>
                <p>𝑾𝗂𝗍һ 𝑒𝗏𝑒𝗋𝗒 ρɑ𝗌𝗌𝗂𝗇𝗀 𝗒𝑒ɑ𝗋, ｍ𝑦 𝗅𝗈𝗏𝑒 𝖿𝗈𝗋 𝗒𝗈υ 𝗀𝗋𝗈𝗐𝗌 𝗌𝗍𝗋𝗈𝗇𝗀𝑒𝗋, 𝖽𝑒𝑒ρ𝑒𝗋 & 𝗆𝗈𝗋𝑒 𝑏𝑒ɑυ𝗍𝗂𝖿υ𝗅 💞✨</p>
                <p>𝗬𝗈υ ɑ𝗿𝑒 ｍ𝑦 𝗄𝗂𝗇𝗀👑, ｍ𝑦 𝑒𝗏𝑒𝗋𝗒𝗍𝗁𝗂𝗇𝗀, ｍ𝑦 ƒ𝗈𝗋𝑒𝗏𝑒𝗋 ❤️🎂</p>
                <p className="font-bold text-rose-600">𝗛𝘢ρρ𝗒 𝗕ⅈ𝔯𝘵һ𝒹ɑ𝑦 𝗮𝗀ɑ𝗂𝗇 ｍ𝑦 𝗃ɑɑ𝗻, ｍ𝑦 𝓮𝑣𝑒𝗋𝗹𝗮𝘀𝘁𝗂𝗻𝗀 𝗅𝗈𝗏𝑒 💞🌹</p>
              </div>

              {/* Urdu Poetry Section */}
              <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100 my-8 space-y-2" dir="rtl">
                <p className="font-serif text-xl md:text-2xl text-rose-900 font-bold">𝑻𝒖 𝒎𝒆𝒓𝒊 𝒉𝒂𝒓 𝒅𝒖𝒂 𝒌𝒂 𝒋𝒘𝒂𝒃 𝒉𝒂𝒊 🌸🫶🏻</p>
                <p className="font-serif text-xl md:text-2xl text-rose-900 font-bold">𝑻𝒖 𝒎𝒆𝒓𝒊 𝒉𝒂𝒓 𝒌𝒉𝒘𝒂𝒂𝒃 𝒌𝒊 𝒋𝒂𝒏 𝒉𝒂𝒊 🕊️🫂</p>
                <p className="font-serif text-xl md:text-2xl text-rose-900 font-bold">𝑻𝒖 𝒎𝒆𝒓𝒊 𝒓𝒐𝒐𝒉 𝒌𝒊 𝒂𝒎𝒂𝒏 𝒉𝒂𝒊 💐</p>
                <p className="font-serif text-xl md:text-2xl text-rose-900 font-bold">𝑻𝒖 𝒎𝒆𝒓𝒊 𝒅𝒉𝒂𝒅𝒌𝒂𝒏 𝒌𝒂 𝒘𝒂𝒋𝒐𝒐𝒅 𝒉𝒂𝒊 💜</p>
                <p className="text-xl mt-4 text-amber-600">𝗠𝗲𝗿𝗲 𝘀𝗵𝗲𝗵𝘇𝗮𝗱𝘆𝘆𝘆𝘆𝘆🌍♥️👑✿◕ ‿ ◕✿🥰💓</p>
              </div>

              {/* Acrostic Section */}
              <div className="space-y-4 font-serif text-xl md:text-2xl text-rose-800" dir="rtl">
                <div className="flex flex-col gap-2">
                   <p><span className="font-bold text-rose-600">*م ســــــــے...🥰🫀🫵🏻*</span> <br/> `محبــت ہــو میــری`</p>
                   <p><span className="font-bold text-rose-600">*ن ســــــــے...👀💖🫶🏻*</span> <br/> `نفاستــ ســے پــاک بھــی تــم ہــو`</p>
                   <p><span className="font-bold text-rose-600">*و ســــــــے...🤌🏻🫧🔐*</span> <br/> `وصــل کــی آغــوش میــں آکــر`</p>
                   <p><span className="font-bold text-rose-600">*ہ ســــــــے...🦋🫂🫶🏻*</span> <br/> `بــر آس بھــی تــم ہو`</p>
                   <p><span className="font-bold text-rose-600">*ی ســــــــے...🫠🌏🌸*</span> <br/> `یقیــن ہــو میــرے بھــروسے کــا`</p>
                   <p><span className="font-bold text-rose-600">*ے ســــــــے...😭🫀🖇️*</span> <br/> `🥺❤یــادوں کــی ســوغاتــ بھــی تــم ہــو`</p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                 <img src="https://media.tenor.com/19J8_Fq2y4EAAAAC/bubu-dudu-kisses.gif" alt="Kiss" className="w-24 h-24 object-contain" />
              </div>

              <div className="mt-12 pt-6 border-t border-amber-200">
                <p className="font-script text-3xl md:text-4xl text-rose-500 animate-pulse">
                  Again Happy wla Birthdayy meryy jan🎂🎉🎊🥳
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SoulmateLetter;