import React, { useState, useEffect } from 'react';
import { Music, ArrowRight } from 'lucide-react';

interface IntroSplashProps {
  onComplete: () => void;
}

const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [confetti, setConfetti] = useState<{ id: number; left: number; color: string; delay: number }[]>([]);

  useEffect(() => {
    if (step === 2) {
      // Generate confetti for the final step
      const colors = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#a855f7', '#ec4899'];
      const newConfetti = Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
      }));
      setConfetti(newConfetti);
    }
  }, [step]);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-rose-50 flex flex-col items-center justify-center cursor-pointer overflow-hidden" 
      onClick={handleNext}
    >
      {/* Background Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-200/30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-300/30 blur-3xl animate-pulse delay-700"></div>

      {/* Floating Balloons Background (Visible on all steps but more prominent on last) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-100px] left-[10%] w-16 h-20 bg-red-400 rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-[-100px] left-[30%] w-14 h-16 bg-blue-400 rounded-full opacity-60 animate-float delay-1000"></div>
        <div className="absolute bottom-[-100px] right-[20%] w-16 h-20 bg-yellow-400 rounded-full opacity-60 animate-float delay-500"></div>
        <div className="absolute bottom-[-100px] right-[40%] w-12 h-14 bg-purple-400 rounded-full opacity-60 animate-float delay-2000"></div>
      </div>

      {/* Confetti Overlay for Step 2 */}
      {step === 2 && (
        <div className="absolute inset-0 pointer-events-none z-0">
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
      )}

      <div className="relative z-10 max-w-2xl px-6 w-full flex flex-col items-center">
        
        {step === 0 && (
          <div className="text-center animate-[fadeIn_0.5s_ease-out]">
            <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-8 drop-shadow-sm font-sans tracking-tight">
              𝙠𝙣𝙊𝙘𝙠 𝙆𝙣𝙊𝙘𝙠^~°🤌🏻🫣
            </h1>
            <div className="relative mb-8">
              <img 
                src="https://media.tenor.com/tHq4X2d1tQAAAAAi/bubu-dudu-shy.gif" 
                alt="Shy" 
                className="w-64 h-64 mx-auto object-contain drop-shadow-xl" 
              />
            </div>
            <p className="mt-8 text-rose-400 animate-pulse font-serif text-xl tracking-widest uppercase">
              (Tap anywhere)
            </p>
          </div>
        )}

        {step === 1 && (
          <div className="text-center animate-[zoomIn_0.5s_ease-out]">
             <h1 className="text-3xl md:text-5xl font-bold text-rose-600 mb-8 leading-relaxed font-sans">
               TUN TUNA TUN<br/>TUNTUN TARA🥳💫
             </h1>
             <div className="flex justify-center items-center gap-4 mb-8">
                <Music className="w-12 h-12 text-rose-500 animate-bounce" />
                <img 
                  src="https://media.tenor.com/uJzT4uGq6tcAAAAi/bubu-dudu-dance.gif" 
                  alt="Dance" 
                  className="w-64 h-64 object-contain drop-shadow-xl" 
                />
                <Music className="w-12 h-12 text-rose-500 animate-bounce delay-100" />
             </div>
             <p className="text-rose-400 animate-pulse font-serif text-lg">
              (Tap again!)
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="text-center animate-[bounceIn_0.8s_cubic-bezier(0.68,-0.55,0.27,1.55)] relative w-full">
             
             <h1 className="text-4xl md:text-6xl font-script text-rose-600 mb-4 drop-shadow-md">
               Happy Birthday Jana
             </h1>
             <div className="text-4xl md:text-6xl mb-8 animate-bounce">
               🎂🎊🎉🎉🎉🥳🎁🎈
             </div>
             
             <img 
               src="https://media.tenor.com/2ce2r4j-rQoAAAAi/bubu-dudu-panda.gif" 
               alt="Party" 
               className="w-56 h-56 mx-auto mb-10 object-contain drop-shadow-xl" 
             />

             <button 
               onClick={(e) => {
                 e.stopPropagation();
                 onComplete();
               }}
               className="group relative px-8 py-4 bg-rose-500 text-white rounded-full font-bold shadow-lg hover:bg-rose-600 transition-all hover:scale-105 flex items-center gap-3 mx-auto overflow-hidden ring-4 ring-rose-200 animate-pulse"
             >
               <span className="relative z-10 text-lg uppercase tracking-widest">Open Gift</span>
               <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             </button>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        @keyframes fall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-120vh) rotate(10deg); }
          100% { transform: translateY(-200vh) rotate(-10deg); }
        }
        .animate-float {
          animation: float 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default IntroSplash;