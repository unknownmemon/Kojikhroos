import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const TimeTogether: React.FC = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Setting start date to approx 1 year 6 months ago from now
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 18); 
    startDate.setHours(0, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="time-together" className="py-16 bg-white min-h-[50vh] flex flex-col justify-center relative overflow-hidden">
      {/* Decorative Balloons */}
      <div className="absolute top-10 left-10 w-12 h-16 bg-pink-300 rounded-full opacity-30 animate-pulse hidden md:block">
         <div className="absolute bottom-[-20px] left-1/2 w-[1px] h-10 bg-gray-300"></div>
      </div>
      <div className="absolute top-20 right-20 w-10 h-14 bg-purple-300 rounded-full opacity-30 animate-pulse delay-700 hidden md:block">
         <div className="absolute bottom-[-20px] left-1/2 w-[1px] h-10 bg-gray-300"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-rose-50 text-rose-500">
          <Clock className="w-6 h-6 mr-2" />
          <span className="uppercase tracking-widest text-sm font-semibold">Every Second Counts</span>
        </div>
        
        {/* Top Right Sticker */}
        <div className="absolute top-0 right-0 md:right-10 opacity-80 pointer-events-none">
           <img 
            src="https://media.tenor.com/zK3_7pIqFqAAAAAi/bubu-dudu.gif" 
            alt="Sitting together"
            className="w-28 h-28 md:w-40 md:h-40 object-contain"
           />
        </div>

        {/* Top Left Party Sticker */}
        <div className="absolute top-0 left-0 md:left-10 pointer-events-none">
           <img 
            src="https://media.tenor.com/2ce2r4j-rQoAAAAi/bubu-dudu-panda.gif" 
            alt="Party Blower"
            className="w-24 h-24 md:w-32 md:h-32 object-contain -scale-x-100"
           />
        </div>

        {/* Bottom Left Sticker */}
        <div className="absolute -bottom-10 left-0 md:left-10 opacity-60 pointer-events-none rotate-12">
           <img 
            src="https://media.tenor.com/ObCp1yJk4mAAAAAi/bubu-dudu-love.gif" 
            alt="Love hearts"
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
           />
        </div>
        
        <div className="relative inline-block">
          <h2 className="font-script text-5xl md:text-6xl text-rose-900 mb-12 relative z-10">
            We have been loving each other for
          </h2>
          <img src="https://media.tenor.com/tHq4X2d1tQAAAAAi/bubu-dudu-shy.gif" className="absolute -top-16 -right-10 w-20 h-20 animate-bounce hidden md:block" alt="Shy" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          <TimeUnit value={time.days} label="Days" />
          <TimeUnit value={time.hours} label="Hours" />
          <TimeUnit value={time.minutes} label="Minutes" />
          <TimeUnit value={time.seconds} label="Seconds" />
        </div>
        
        <div className="mt-12 font-serif text-xl text-rose-800/70 italic flex items-center justify-center gap-2">
          ...and this is just the beginning. 
          <img src="https://media.tenor.com/19J8_Fq2y4EAAAAC/bubu-dudu-kisses.gif" className="w-12 h-12 inline-block" alt="Kiss" />
        </div>
      </div>
    </section>
  );
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center p-6 bg-rose-50/50 rounded-2xl border border-rose-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm relative">
    <div className="absolute -top-3 -right-3">
       <span className="text-2xl animate-bounce">🎈</span>
    </div>
    <span className="font-sans text-4xl md:text-5xl font-bold text-rose-600 mb-2 tabular-nums">
      {value}
    </span>
    <span className="font-serif text-lg text-rose-900/60 uppercase tracking-widest">{label}</span>
  </div>
);

export default TimeTogether;