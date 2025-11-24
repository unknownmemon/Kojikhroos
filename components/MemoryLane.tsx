import React from 'react';
import { Heart, Star, Calendar, Gem } from 'lucide-react';

const MemoryLane: React.FC = () => {
  const events = [
    {
      date: "1 Year 6 Months Ago",
      title: "How Our Beginning Started",
      description: "The moment our paths crossed and life became colorful. It wasn't just a meeting; it was destiny aligning our stars.",
      icon: <Star className="w-6 h-6 text-white" />
    },
    {
      date: "May 24th",
      title: "The Proposal",
      description: "The day you asked me to be yours forever. It was the easiest 'Yes' I have ever said, and a moment I replay in my heart every single day.",
      icon: <Gem className="w-6 h-6 text-white" />
    },
    {
      date: "Today",
      title: "Celebrating You",
      description: "Another year around the sun for my favorite person. Celebrating the beautiful soul you are and the love we share.",
      icon: <Calendar className="w-6 h-6 text-white" />
    },
    {
      date: "Forever",
      title: "The Future",
      description: "Looking forward to endless days, laughter, and memories waiting to be made together.",
      icon: <Heart className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="memories" className="py-24 bg-rose-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-script text-6xl text-rose-900 mb-6">Our Love Story</h2>
          <p className="font-serif text-xl text-rose-700 italic">A timeline of my favorite moments with you.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-rose-200"></div>

          <div className="space-y-12 md:space-y-24">
            {events.map((event, index) => (
              <div key={index} className={`relative flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                
                {/* Content Box */}
                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                  <div className="bg-white p-8 rounded-2xl shadow-md border border-rose-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                      {event.date}
                    </span>
                    <h3 className="font-serif text-3xl text-rose-900 mb-4 group-hover:text-rose-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-rose-400 border-4 border-white shadow-lg z-10">
                  {event.icon}
                </div>

                {/* Empty Space for Layout Balance */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryLane;