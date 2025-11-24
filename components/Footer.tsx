import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-900 py-12 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <Heart className="w-8 h-8 mx-auto fill-rose-400 text-rose-400 mb-6 animate-pulse" />
        <h3 className="font-script text-4xl mb-4">Forever & Always</h3>
        <p className="font-serif text-rose-200 opacity-80">
          Made with all my love, for your special day.
        </p>
        <div className="mt-8 text-xs text-rose-400/50 uppercase tracking-widest">
          Est. {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
