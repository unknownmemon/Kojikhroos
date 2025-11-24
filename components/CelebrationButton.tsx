import React, { useState, useCallback } from 'react';
import { PartyPopper } from 'lucide-react';

const CelebrationButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [confetti, setConfetti] = useState<{ id: number; left: number; color: string; animationDuration: string; delay: string }[]>([]);
  const [currentSticker, setCurrentSticker] = useState(0);

  const stickers = [
    "https://media.tenor.com/uJzT4uGq6tcAAAAi/bubu-dudu-dance.gif",
    "https://media.tenor.com/C32sV6Y5qB4AAAAi/happy-birthday-bubu-dudu.gif",
    "https://media.tenor.com/2ce2r4j-rQoAAAAi/bubu-dudu-panda.gif",
    "https://media.tenor.com/StopZ_hZl-EAAAAi/bubu-dudu.gif"
  ];

  const colors = ['#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#6366f1', '#3b82f6', '#14b8a6', '#22c55e', '#eab308', '#f97316'];

  const triggerCelebration = useCallback(() => {
    if (isActive) return;

    setIsActive(true);
    setCurrentSticker(prev => (prev + 1) % stickers.length);

    // Generate confetti
    const newConfetti = Array.from({ length: 100 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      animationDuration: `${2 + Math.random() * 3}s`,
      delay: `${Math.random() * 0.5}s`
    }));

    setConfetti(newConfetti);

    // Reset after animation (4s to match CSS)
    setTimeout(() => {
      setIsActive(false);
      setConfetti([]);
    }, 4000);
  }, [isActive, stickers.length]);

  return (
    <>
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden flex items-center justify-center">
            {/* Confetti Particles */}
            {confetti.map((c) => (
            <div
                key={c.id}
                className="absolute top-[-20px] w-3 h-3 rounded-sm animate-celebration-fall"
                style={{
                left: `${c.left}%`,
                backgroundColor: c.color,
                animationDuration: c.animationDuration,
                animationDelay: c.delay,
                }}
            />
            ))}

            {/* Central Modal */}
            <div className="relative animate-celebration-pop bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-rose-200 text-center mx-4">
                <h2 className="font-script text-5xl md:text-7xl text-rose-600 mb-6 drop-shadow-sm">
                    Happy Birthday!
                </h2>
                <div className="flex justify-center gap-2 mb-4">
                    <span className="text-4xl animate-bounce">🎈</span>
                    <span className="text-4xl animate-bounce" style={{animationDelay: '0.1s'}}>🍰</span>
                    <span className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>🎁</span>
                </div>
                <img 
                    src={stickers[currentSticker]} 
                    alt="Celebration Sticker" 
                    className="w-40 h-40 mx-auto object-contain"
                />
            </div>
        </div>
      )}

      <button
        onClick={triggerCelebration}
        disabled={isActive}
        className={`fixed bottom-6 right-6 z-[90] w-16 h-16 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg shadow-rose-300/50 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 group ${isActive ? 'opacity-50 cursor-default' : 'hover:shadow-rose-400/70 animate-bounce-slow'}`}
        aria-label="Celebrate"
      >
        <PartyPopper className={`w-8 h-8 ${isActive ? 'animate-spin' : 'group-hover:rotate-12 transition-transform'}`} />
      </button>

      <style>{`
        @keyframes celebration-fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(105vh) rotate(720deg); opacity: 0; }
        }
        @keyframes celebration-pop {
          0% { opacity: 0; transform: scale(0.5); }
          20% { opacity: 1; transform: scale(1.1); }
          40% { transform: scale(1); }
          80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.8); }
        }
        .animate-celebration-fall {
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        .animate-celebration-pop {
          animation: celebration-pop 4s ease-in-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </>
  );
};

export default CelebrationButton;