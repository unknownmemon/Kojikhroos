import React, { useState } from 'react';
import { Sparkles, Send, PenTool, Loader2 } from 'lucide-react';
import { generateRomanticPoem } from '../services/geminiService';
import { LoadingState } from '../types';

const LovePoemGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [poem, setPoem] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setStatus(LoadingState.LOADING);
    setPoem(null);

    try {
      const result = await generateRomanticPoem(topic);
      setPoem(result);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
       {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-rose-100 opacity-20 transform -rotate-12 text-9xl font-serif">"</div>
        <div className="absolute bottom-10 right-10 text-rose-100 opacity-20 transform rotate-12 text-9xl font-serif">"</div>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block p-3 rounded-full bg-rose-50 mb-4">
            <Sparkles className="w-6 h-6 text-rose-400" />
          </div>
          <h2 className="font-script text-5xl text-rose-900 mb-4">Our Digital Poet</h2>
          <p className="font-serif text-lg text-gray-600">
            Enter a memory, a feeling, or a word, and let me write you a poem.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-rose-100 overflow-hidden">
          <div className="p-8 bg-rose-50/50">
            <form onSubmit={handleGenerate} className="relative">
              <div className="relative flex items-center">
                <PenTool className="absolute left-4 w-5 h-5 text-rose-400" />
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., May 24th Proposal, The day we met, Your laugh..."
                  className="w-full pl-12 pr-14 py-4 bg-white border-2 border-rose-100 rounded-xl focus:outline-none focus:border-rose-300 focus:ring-4 focus:ring-rose-100 transition-all text-rose-900 placeholder-rose-300"
                />
                <button
                  type="submit"
                  disabled={status === LoadingState.LOADING || !topic.trim()}
                  className="absolute right-2 p-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {status === LoadingState.LOADING ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="min-h-[200px] flex items-center justify-center p-8 md:p-12 bg-white">
            {status === LoadingState.IDLE && (
              <div className="text-center text-gray-400 italic font-serif">
                Waiting for your inspiration...
              </div>
            )}
            
            {status === LoadingState.LOADING && (
               <div className="flex flex-col items-center text-rose-400">
                 <div className="w-12 h-12 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin mb-4"></div>
                 <span className="font-script text-xl">Weaving words together...</span>
               </div>
            )}

            {status === LoadingState.ERROR && (
              <div className="text-center text-rose-400 italic font-serif">
                The muse is shy right now. Please try again.
              </div>
            )}

            {status === LoadingState.SUCCESS && poem && (
              <div className="w-full max-w-lg mx-auto animate-[fadeIn_1s_ease-out]">
                <div className="text-center relative">
                  <p className="font-serif text-2xl md:text-3xl text-rose-800 leading-loose italic whitespace-pre-line">
                    {poem}
                  </p>
                  <div className="mt-6 flex justify-center">
                     <div className="h-px w-16 bg-rose-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LovePoemGenerator;