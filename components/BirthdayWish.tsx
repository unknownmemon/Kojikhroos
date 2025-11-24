import React, { useState, useEffect } from 'react';
import { Heart, PartyPopper, X, Crown, Sparkles } from 'lucide-react';

const BirthdayWish: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confetti, setConfetti] = useState<{ id: number; left: number; color: string; delay: number }[]>([]);

  useEffect(() => {
    if (isOpen) {
      // Generate confetti
      const colors = ['#ff0000', '#ff69b4', '#ffd700', '#ff1493', '#ff4500'];
      const newConfetti = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
      }));
      setConfetti(newConfetti);
    } else {
      setConfetti([]);
    }
  }, [isOpen]);

  return (
    <section className="py-24 bg-gradient-to-b from-rose-50 to-white flex flex-col items-center justify-center relative overflow-hidden min-h-screen">
      <div className="max-w-4xl mx-auto px-4 w-full flex flex-col items-center relative z-10">
        
        {!isOpen ? (
          <div className="text-center animate-[fadeIn_1s_ease-out]">
            <div className="mb-10 relative">
              <h2 className="font-script text-6xl text-rose-900 mb-4 drop-shadow-sm">The Grand Finale</h2>
              <p className="font-serif text-xl text-rose-700 italic">One last wish for my Khroosman...</p>
              
              {/* Dancing Sticker on Closed State */}
              <img src="https://media.tenor.com/uJzT4uGq6tcAAAAi/bubu-dudu-dance.gif" alt="Dance" className="w-20 h-20 absolute -right-10 top-0 hidden md:block" />
              <img src="https://media.tenor.com/C32sV6Y5qB4AAAAi/happy-birthday-bubu-dudu.gif" alt="Cake" className="w-20 h-20 absolute -left-10 bottom-0 hidden md:block" />
            </div>
            
            <button
              onClick={() => setIsOpen(true)}
              className="group relative w-80 h-80 rounded-full bg-white border-8 border-rose-200 shadow-[0_0_50px_rgba(253,164,175,0.5)] cursor-pointer hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-100 via-transparent to-transparent opacity-50 animate-pulse"></div>
              
              <Crown className="w-24 h-24 text-rose-500 mb-6 animate-bounce drop-shadow-md" />
              
              <div className="font-script text-4xl text-rose-800 relative z-10 group-hover:text-rose-600 transition-colors">
                Open Your Wish
              </div>
              
              <PartyPopper className="absolute bottom-12 right-16 text-yellow-500 w-8 h-8 animate-spin-slow" />
              <Sparkles className="absolute top-12 left-16 text-yellow-400 w-8 h-8 animate-pulse" />
            </button>
          </div>
        ) : (
          <div className="relative w-full max-w-3xl bg-white/95 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-2xl border-4 border-rose-200 animate-[zoomIn_0.6s_ease-out] mx-2 h-[80vh] flex flex-col">
            
            {/* Confetti Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {confetti.map((c) => (
                <div
                  key={c.id}
                  className="absolute top-0 w-3 h-3 rounded-full animate-fall"
                  style={{
                    left: `${c.left}%`,
                    backgroundColor: c.color,
                    animationDuration: '3s',
                    animationDelay: `${c.delay}s`,
                    animationIterationCount: 'infinite'
                  }}
                />
              ))}
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 bg-rose-100 rounded-full text-rose-500 hover:bg-rose-200 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scrollable Content Area */}
            <div className="overflow-y-auto pr-2 custom-scrollbar flex-1 relative z-20">
              <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-4 mb-4">
                  <img src="https://media.tenor.com/2ce2r4j-rQoAAAAi/bubu-dudu-panda.gif" className="w-12 h-12 object-contain hidden md:block -scale-x-100" alt="Party" />
                  <Crown className="w-12 h-12 text-rose-500" />
                  <img src="https://media.tenor.com/2ce2r4j-rQoAAAAi/bubu-dudu-panda.gif" className="w-12 h-12 object-contain hidden md:block" alt="Party" />
                </div>
                
                {/* Cake Celebration Sticker */}
                <div className="flex justify-center mb-6 relative">
                   <img 
                    src="https://media.tenor.com/C32sV6Y5qB4AAAAi/happy-birthday-bubu-dudu.gif" 
                    alt="Birthday Cake Celebration" 
                    className="w-48 h-48 object-contain drop-shadow-lg" 
                   />
                   <img src="https://media.tenor.com/StopZ_hZl-EAAAAi/bubu-dudu.gif" alt="Confetti" className="absolute -right-4 top-10 w-24 h-24 object-contain opacity-80 hidden md:block" />
                   <img src="https://media.tenor.com/StopZ_hZl-EAAAAi/bubu-dudu.gif" alt="Confetti" className="absolute -left-4 top-10 w-24 h-24 object-contain opacity-80 hidden md:block" />
                </div>

                <h1 className="font-script text-5xl md:text-6xl text-rose-600 mb-2 leading-tight">
                  HAPPY BIRTHDAY KHROOSMAN
                </h1>
                <p className="font-serif text-xl text-rose-400 italic tracking-wide border-b pb-4 inline-block">
                  A special wish from your kojii
                </p>
              </div>

              <div className="space-y-6 font-sans text-lg text-gray-700 leading-relaxed px-2 md:px-6 text-center md:text-left">
                <p>
                  <span className="font-script text-3xl text-rose-500 block mb-2 text-center">Happy Birthdayy Mryy jan Mry khroosman Mera sukoon jind jan❤🙈🎂🎈🎁</span>
                  Aj apka special din h or mryy lye bh bht special h Jesyy mryy lye ap bht special ho wsyy hi💋💋Allah pak apko hmesha khush rkhy mryy sath rkhyyy Or bht sara kamiyab kryyy Ameen🤲❤or Mjh jesyyy churail ko brdasht krnyy ki himmat de Ameeen❤😁
                </p>
                
                <p>
                  I love you sooo much mry jan apko pta h first time bt krty wqt andaza nh hwa tha ap mryy lye itny special hojaogy ab sirf ap ho ab koi aa nh skhta You are my first and last love🥺😘❤
                </p>

                <p>
                  Mra dil krta h mn apko itna zyada pyar doon mtlb unlimited apky nakhryy uthaon apka gussa brdasht kroon mjh apkii har cheez psnd h bs ek bar mil jaoo bht pyar s rkhoongy🥺jesa khogy wsa kroongy apkyy lye mn kch bh kr skhty hon Bs apko chor nh skhty❤🥺😘😘
                </p>

                <p>
                  Apko pta h mn bht luckyy hon mjh ap milyyy❤😘agr ap nh aaty mryy life mn to mn aj sch mn single hoty q k mjh apkyyy sth jo feeling aae wo shyd kisi or k sth possible nh th Apke sth reh kr mjh bht comfortable feel hota h lgta hi nh ap mjh s itna door bthy ho Apse bt krke ek alg hi sukoon milta h mra bas chalyy apkyy sth hi lgy rhoon apko samny bithalon or khin jane na doon❤🥺🥺
                </p>

                <p>
                  Apky sth har din bht special hota h Allah pak s sirf mny apka sath manga h mjh or kch nh chahye🥺❤🎀mRY lye paisa blkul matter nh krta uskyy bgair guzara ho skhta h apkyy bgair nh ho skhta🥺🥺Apse ek din ki bh doori brdasht nh mjh agr door hwe to shyd zinda na rhoon🥺
                </p>

                <p>
                  Bs hmesha mryy sth rhna pta h bht tng krty hon but krlena brdasht ab thora sa🙈❤Mjh kch smjh nh aaya apka ajka din kc special kroon but mny har mumkin koshish kii ha apky lye🥺🥺
                  Agr mn apkyy sth hoty na to achyy s celebrate krty har cheez perfect krty pass hoty to ye din bht special krty apka pr koi nh ek na ek din sth hojaengy phr har cheez krengy sth🥺👀🎂💋💋
                </p>

                {/* Urdu Poetry Block */}
                <div className="bg-rose-50 p-6 rounded-xl border border-rose-200 my-8 text-center" dir="rtl">
                  <p className="font-serif text-2xl text-rose-800 leading-loose font-bold">
                    رفعتیں اور بلندی بھی تجھ پے ناز کرے<br/>
                    تیری یہ عمر خدا اور بھی دراز کرے<br/>
                    حسین چہرے کی تابندگی مبارک ہو<br/>
                    تجھے یہ سالگرہ کی خوشی مبارک ہو
                  </p>
                </div>

                <p className="text-center font-medium">
                  𝑯𝒂𝒑𝒑𝒚𝒚𝒚𝒚 𝑩𝒊𝒓𝒕𝒉𝒅𝒂𝒚𝒚𝒚𝒚𝒚 𝒕𝒐𝒐 𝒚𝒐𝒖𝒖𝒖 "𝑴𝒚𝒚𝒚𝒚 𝑳𝒐𝒗𝒆𝒆𝒆𝒆" &lt;3♥️🌍🌹🌙🌼
                </p>

                <p>
                  I love you sooo much Hmesha mryy sth rhna khroosman🥺💋💋Aj wo special din hai jis din aap is duniya mein aaye the... 🌍
                  Jitne aap apne liye special ho, usse kahin zyada mere liye ho 💕
                  Agar yeh din na hota, to aap bhi na hote…
                  Aur na meri zindagi itni khubsurat hoti jitni ke ab hai 🥹🤍✨
                </p>

                <p>
                  Aap ka saath meri zindagi ki sabse haseen blessing hai 💍🫀
                  Main har din shukar guzar hoti hun Allah ka, jisne mujhe aap jesa hissa diya💐💋❤😍🎁
                </p>

                <div className="bg-rose-50 p-6 rounded-xl border border-rose-200 my-8 text-center" dir="rtl">
                   <p className="font-serif text-2xl text-rose-800 leading-loose font-bold">
                    "نہ جانے ایسی بھی کیا دلکشی ہے تم میں،<br/>
                    میں نے اخیرِ خواہش میں بھی تیری محبت مانگی" 💞
                   </p>
                </div>

                <p className="text-center italic text-rose-800">
                  Allah Pak se meri har dua mein yahi shamil hai<br/>
                  “Ke hum hamesha saath rahein, har khushi har gham mein...” 🤍🌸<br/>
                  <span className="font-bold text-xl mt-2 block">Ameen 🙌🏻</span>
                </p>

                <div className="text-center mt-10 pb-4">
                  <p className="font-script text-4xl text-rose-600 animate-pulse">
                    Again Happy Birthdayyy Mera bachaw Mry jan❤🎂🥳🎉🌸🎊
                  </p>
                  <img src="https://media.tenor.com/N6sLhV9N1HAAAAAi/dudu-bubu-excited.gif" className="mx-auto w-24 h-24 mt-4" alt="Excited" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fff0f0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ffb3b3;
          border-radius: 3px;
        }
        @keyframes fall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default BirthdayWish;