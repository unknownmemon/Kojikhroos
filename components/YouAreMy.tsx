import React from 'react';
import { Heart, Star, Sparkles, PartyPopper } from 'lucide-react';

const YouAreMy: React.FC = () => {
  const items = [
    "My love❤💋", "My sukooon👀😍", "My Heatbeat🤭❤", "My Husband😘😘",
    "My Medicine❤💋", "My khroosman🙈❤", "My Bandar🌸😉", "My king🥰❤",
    "Myy bachaw❤😘", "My honey🎀🥰", "My darling❤😘", "My Tom🙈🥰",
    "My Teddy bear😘😍", "My Real One🤭🙈", "My peace🙈🌸", "My Happinesss🤭🌸",
    "My Day maker🥰😍", "My Soulmate❤😩", "My Forever😘😘", "My Pasandida Mard💋💋💋"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Sticker Top Left */}
      <img src="https://media.tenor.com/ObCp1yJk4mAAAAAi/bubu-dudu-love.gif" alt="Love" className="absolute top-10 left-4 w-20 h-20 opacity-50 animate-bounce hidden md:block" />
      <img src="https://media.tenor.com/StopZ_hZl-EAAAAi/bubu-dudu.gif" alt="Confetti" className="absolute bottom-10 right-4 w-24 h-24 opacity-50 animate-pulse hidden md:block" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-rose-50 text-rose-400">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="uppercase tracking-widest text-xs font-bold">Everything</span>
          </div>
          <h2 className="font-script text-6xl md:text-7xl text-rose-600 mb-6">You are my...</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-rose-200 to-rose-400 mx-auto rounded-full"></div>
          
          <img src="https://media.tenor.com/N6sLhV9N1HAAAAAi/dudu-bubu-excited.gif" alt="Excited" className="w-16 h-16 absolute top-0 right-0 md:right-20 hidden md:block" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24 relative">
          {items.map((item, index) => (
            <div 
              key={index}
              className="px-6 py-4 bg-white border-2 border-rose-100 rounded-full shadow-sm hover:shadow-lg hover:border-rose-300 hover:scale-105 transition-all duration-300 cursor-default group flex items-center gap-2"
            >
              <PartyPopper className="w-4 h-4 text-rose-300 group-hover:text-rose-500 transition-colors" />
              <span className="font-serif text-lg md:text-xl text-rose-800 group-hover:text-rose-600 transition-colors">{item}</span>
            </div>
          ))}
          <img src="https://media.tenor.com/g9k8aM8b_QoAAAAC/bubu-dudu-hug.gif" alt="Hug" className="w-16 h-16 absolute -bottom-10 -left-4 hidden md:block" />
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-white rounded-3xl p-8 md:p-16 shadow-xl border border-rose-100 text-center space-y-8 relative overflow-hidden">
            <Heart className="absolute top-4 left-4 w-8 h-8 text-rose-200 opacity-50 animate-pulse" />
            <Heart className="absolute bottom-4 right-4 w-12 h-12 text-rose-200 opacity-50 animate-pulse delay-700" />
            
            {/* Sticker Inside Box */}
            <img src="https://media.tenor.com/uJzT4uGq6tcAAAAi/bubu-dudu-dance.gif" alt="Dance" className="mx-auto w-24 h-24 object-contain mb-4" />

            <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-700">
              Happiest birthdayy myyy love✨😥❤😭✨my hubby✨❤🥀 mriiii zindagiii MRA Bcha♥️✨💫 mryy shezadayyy kooo happy walaaa bdyyyyyy❤🥀😥😘🌹🌺🌸😟🎂
            </p>
            
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-700">
              Sweetheart, I wish you a happy birthday from the bottom of my heart❤🥀😥😘🌹🌺🌸😟🎂
            </p>
            
            <div className="font-serif text-xl md:text-2xl leading-relaxed text-gray-700">
              <p className="mb-4">Happy birthday to the most caring 😟😭and best-looking man in the world🌍🌛✨🤧</p>
              <p className="mb-4">I'm so lucky to have you in my life🌍✨🤧😟</p>
              <p>Can’t wait to spend all the future birthdays with you. ❤🥀🌹🌺🌸</p>
            </div>

            <div className="py-8 px-4 bg-white/60 rounded-2xl border border-rose-100 mx-auto max-w-3xl shadow-sm" dir="rtl">
              <p className="font-serif text-2xl md:text-3xl text-rose-800 font-bold leading-loose">
                "تمہاری مسکان میری دنیا کو روشن کرتی ہے، اور تمہاری محبت میرا سب سے قیمتی تحفہ ہے۔ ❤️<br/>
                سالگرہ مبارک ہو، ! 🎉✨"
              </p>
            </div>

            <div className="pt-8 border-t border-rose-100 relative">
              <p className="font-script text-4xl md:text-5xl text-rose-600 animate-pulse">
                Love youuuuuuuu 💋💋💋💋💋💋💋💋💋💋
              </p>
               <img src="https://media.tenor.com/19J8_Fq2y4EAAAAC/bubu-dudu-kisses.gif" alt="Kiss" className="w-16 h-16 absolute right-10 top-2 hidden md:block" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default YouAreMy;