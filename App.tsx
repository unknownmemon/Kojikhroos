import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Hero from './components/Hero';
import TimeTogether from './components/TimeTogether';
import SurpriseGateway from './components/SurpriseGateway';
import PoetrySurprise from './components/PoetrySurprise';
import SecondPoetrySurprise from './components/SecondPoetrySurprise';
import Promises from './components/Promises';
import YouAreMy from './components/YouAreMy';
import BirthdayWish from './components/BirthdayWish';
import EverySecondLove from './components/EverySecondLove';
import SoulmateLetter from './components/SoulmateLetter';
import FinalMedicalStoreWish from './components/FinalMedicalStoreWish';
import Footer from './components/Footer';
import IntroSplash from './components/IntroSplash';
import CelebrationButton from './components/CelebrationButton';

// Floating hearts background effect
const HeartRain: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number, left: number, delay: number, duration: number }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 10
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden h-full w-full">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute -top-10 text-rose-200/40 text-2xl"
          style={{
            left: `${heart.left}%`,
            animation: `fall ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ♥
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// Global Balloon Background Effect
const BalloonBackground: React.FC = () => {
  const [balloons, setBalloons] = useState<{ id: number; left: number; color: string; delay: number; speed: number }[]>([]);

  useEffect(() => {
    const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'];
    const newBalloons = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      speed: 15 + Math.random() * 10
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden h-full w-full opacity-30 mix-blend-multiply">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className={`absolute -bottom-20 w-8 h-10 rounded-full ${balloon.color}`}
          style={{
            left: `${balloon.left}%`,
            animation: `floatUp ${balloon.speed}s linear infinite`,
            animationDelay: `${balloon.delay}s`,
          }}
        >
          {/* Balloon string */}
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[1px] h-4 bg-slate-400"></div>
          {/* Balloon Shine */}
          <div className="absolute top-2 left-2 w-2 h-4 bg-white/40 rounded-full rotate-45"></div>
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-120vh) rotate(10deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [view, setView] = useState<'landing' | 'surprises'>('landing');

  const handleEnterSurprises = () => {
    setView('surprises');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    setView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showIntro) {
    return <IntroSplash onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen w-full bg-paper text-slate-800 overflow-x-hidden font-sans">
      <HeartRain />
      <BalloonBackground />
      
      {view === 'landing' ? (
        <main className="relative z-10 animate-[fadeIn_1s_ease-out]">
          <Hero />
          <TimeTogether />
          <SurpriseGateway onUnlock={handleEnterSurprises} />
        </main>
      ) : (
        <main className="relative z-10 animate-[slideUp_1s_ease-out]">
           <nav className="fixed top-4 left-4 z-50 print:hidden">
             <button 
               onClick={handleBackHome}
               className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md text-rose-500 hover:bg-rose-100 transition-colors border border-rose-200 group"
               title="Back to Home"
             >
               <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
             </button>
           </nav>

          <PoetrySurprise />
          <SecondPoetrySurprise />
          <Promises />
          <YouAreMy />
          <BirthdayWish />
          <EverySecondLove />
          <SoulmateLetter />
          <FinalMedicalStoreWish />
        </main>
      )}
      
      <CelebrationButton />
      
      <div className="relative z-10">
        <Footer />
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}

export default App;