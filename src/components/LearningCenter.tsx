import React from 'react';
import { 
  BookOpen, 
  Compass, 
  BookMarked, 
  Calendar, 
  AlertCircle, 
  Sparkles, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { GUIDES_DATA } from '../data/hifzData';
import { GuideItem } from '../types';

interface LearningCenterProps {
  onSelectGuide: (guide: GuideItem) => void;
}

const ICONS_MAP: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5 text-[#C8A052]" />,
  Compass: <Compass className="w-5 h-5 text-[#C8A052]" />,
  BookMarked: <BookMarked className="w-5 h-5 text-[#C8A052]" />,
  Calendar: <Calendar className="w-5 h-5 text-[#C8A052]" />,
  AlertCircle: <AlertCircle className="w-5 h-5 text-[#C8A052]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#C8A052]" />
};

export const LearningCenter: React.FC<LearningCenterProps> = ({ onSelectGuide }) => {
  return (
    <section id="learning-center" className="py-20 bg-[#031C17] text-[#F3EBDD] border-b border-gold-subtle relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#062D24] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A052] uppercase">
            <span className="w-4 h-0.5 bg-[#C8A052]/60" />
            <span>Learn &amp; Grow</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3EBDD] mt-2">
            Hifz Learning Center
          </h2>

          <p className="text-base sm:text-lg text-[#F3EBDD]/80 font-light mt-3">
            Practical guidance for every stage of your Hifz journey.
          </p>
        </div>

        {/* Essential Qualified Teacher Notice Banner */}
        <div className="mb-10 bg-[#073B30]/50 border border-gold-subtle rounded-2xl p-4 sm:p-5 flex items-start gap-4">
          <div className="w-9 h-9 rounded-xl bg-[#C8A052]/15 border border-[#C8A052]/30 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5 text-[#C8A052]" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#F3EBDD]">
              Recitation Golden Rule: Always Learn with a Qualified Sheikh
            </h4>
            <p className="text-xs sm:text-sm text-[#8EA393] mt-1 leading-relaxed">
              Self-memorization without recitation audit leads to cementing errors in pronunciation (Makharij) and Tajweed rules. We strongly advise every student to recite every new passage to a qualified teacher before committing it to memory.
            </p>
          </div>
        </div>

        {/* Grid: 6 Educational Cards + Quran on Rehal Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 6 Cards (Left 7-8 cols on desktop) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {GUIDES_DATA.map((guide) => (
              <button
                key={guide.id}
                onClick={() => onSelectGuide(guide)}
                className="group flex flex-col justify-between text-left p-6 rounded-2xl bg-[#062D24] border border-gold-subtle hover:border-[#C8A052] hover:bg-[#073B30] transition-all duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A052] min-h-[190px]"
              >
                <div>
                  {/* Icon in gold accent circle */}
                  <div className="w-12 h-12 rounded-xl bg-[#031C17] border border-gold-subtle/60 flex items-center justify-center group-hover:scale-105 group-hover:border-[#C8A052] transition-transform mb-4">
                    {ICONS_MAP[guide.iconName] || <BookOpen className="w-5 h-5 text-[#C8A052]" />}
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#F3EBDD] group-hover:text-[#C8A052] transition-colors leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-[#8EA393] mt-2 font-light line-clamp-2">
                    {guide.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gold-subtle/30 flex items-center justify-between text-[11px] text-[#C8A052] font-medium">
                  <span>{guide.readTime}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>

          {/* Right Visual: Glowing Quran on Wooden Rehal (Right 4-5 cols) */}
          <div className="lg:col-span-4 h-full">
            <div className="relative rounded-3xl overflow-hidden border border-gold-subtle shadow-2xl bg-gradient-to-b from-[#073B30] to-[#031C17] group h-full flex flex-col justify-between">
              
              <div className="p-6 pb-2 z-10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A052]">
                  The Living Word
                </span>
                <h4 className="font-serif text-xl font-bold text-[#F3EBDD] mt-1">
                  Reverence &amp; Routine
                </h4>
                <p className="text-xs text-[#8EA393] mt-1 leading-relaxed">
                  Treating the Mus&apos;haf with utmost care, placing it upon a clean stand, and approaching every session with wudhu and humility.
                </p>
              </div>

              <div className="relative mt-4">
                <img
                  src="./images/quran-rehal.png"
                  alt="Holy Quran resting on an ornate carved wooden rehal stand illuminated by a warm lantern"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031C17] via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
