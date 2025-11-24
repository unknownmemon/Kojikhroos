import React from 'react';
import { Sun, Smile, Coffee, Compass, Music, BookHeart } from 'lucide-react';
import { Reason } from '../types';

const REASONS: Reason[] = [
  {
    id: 1,
    icon: <Sun className="w-6 h-6" />,
    title: "Your Optimism",
    description: "You always find the silver lining, even on the darkest days."
  },
  {
    id: 2,
    icon: <Smile className="w-6 h-6" />,
    title: "Your Laugh",
    description: "It's my favorite sound in the entire world. It heals me."
  },
  {
    id: 3,
    icon: <Coffee className="w-6 h-6" />,
    title: "Morning Rituals",
    description: "The way you look before you've had your first cup of coffee."
  },
  {
    id: 4,
    icon: <Compass className="w-6 h-6" />,
    title: "Our Adventures",
    description: "Whether it's the grocery store or a new country, it's always fun."
  },
  {
    id: 5,
    icon: <Music className="w-6 h-6" />,
    title: "Your Taste",
    description: "You introduce me to beautiful things I'd never find alone."
  },
  {
    id: 6,
    icon: <BookHeart className="w-6 h-6" />,
    title: "Your Heart",
    description: "The way you care for everyone around you inspires me daily."
  }
];

const ReasonsGrid: React.FC = () => {
  return (
    <section className="py-24 bg-rose-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:text-center">
           <h2 className="font-script text-5xl text-rose-900 mb-4">Why I Love You</h2>
           <p className="font-serif text-lg text-rose-800/60 italic">Let me count the ways...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason) => (
            <div 
              key={reason.id}
              className="bg-white/60 backdrop-blur-md border border-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 mb-4">
                {reason.icon}
              </div>
              <h3 className="font-serif text-xl text-rose-900 font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsGrid;
