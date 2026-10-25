import React from 'react';
import { Play, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { INITIAL_STATS } from '../data/hifzData';

interface HeroProps {
  onWatchJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchJourney }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#031C17] via-[#062D24] to-[#031C17] border-b border-gold-subtle"
    >
      {/* Delicate background decorative radial lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#073B30]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#C8A052]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Actions, Statistics */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-7 z-10">
            
            {/* Subtle Brand Kicker */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-widest text-[#C8A052] uppercase">
              <span className="w-4 h-0.5 bg-[#C8A052]/60" />
              <span>Hifz In Progress</span>
            </div>

            {/* Main Headline with Italic Gold Serif Accent */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-[#F3EBDD] leading-[1.12]">
              Your Hifz Journey <br />
              <span className="italic font-normal text-[#C8A052]">Starts Here</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#F3EBDD]/80 max-w-xl font-light leading-relaxed">
              A real journey. A deeper connection. One ayah at a time. Towards becoming a Hafiz of the Holy Qur&apos;an.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onWatchJourney}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#031C17] bg-[#C8A052] hover:bg-[#D8B062] active:scale-95 transition-all rounded-full shadow-lg shadow-[#031C17]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A052]"
              >
                <div className="w-5 h-5 rounded-full bg-[#031C17]/15 flex items-center justify-center">
                  <Play className="w-3 h-3 text-[#031C17] fill-current translate-x-0.5" />
                </div>
                <span>Watch My Journey</span>
              </button>

              <a
                href="#resources"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-[#F3EBDD] hover:text-[#C8A052] transition-colors group"
              >
                <span>Explore Hifz Resources</span>
                <ArrowRight className="w-4 h-4 text-[#C8A052] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Three Compact Styled Statistics */}
            <div className="pt-6 sm:pt-10 border-t border-gold-subtle/40">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F3EBDD] tabular-nums">
                    {INITIAL_STATS.followers}
                  </div>
                  <div className="text-xs text-[#8EA393] uppercase tracking-wider mt-1 font-medium">
                    {INITIAL_STATS.followersLabel}
                  </div>
                </div>

                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F3EBDD] tabular-nums">
                    {INITIAL_STATS.views}
                  </div>
                  <div className="text-xs text-[#8EA393] uppercase tracking-wider mt-1 font-medium">
                    {INITIAL_STATS.viewsLabel}
                  </div>
                </div>

                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F3EBDD] tabular-nums">
                    {INITIAL_STATS.videos}
                  </div>
                  <div className="text-xs text-[#8EA393] uppercase tracking-wider mt-1 font-medium">
                    {INITIAL_STATS.videosLabel}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Reference Character Visual with Islamic Arch & Ayah */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient gold glow behind character */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#C8A052]/15 via-transparent to-transparent rounded-full blur-2xl transform scale-90" />

            {/* The Character Visual Container */}
            <div className="relative w-full max-w-md sm:max-w-lg mx-auto rounded-3xl overflow-hidden border border-gold-subtle shadow-2xl bg-gradient-to-b from-[#073B30] to-[#031C17] group">
              
              <img
                src="./images/hero-character.png"
                alt="Faceless Muslim student in dark emerald kurta holding the Holy Quran with Islamic mosque arch background"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                loading="eager"
              />

              {/* Quranic Ayah Overlay Badge (Taha 20:114) */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#031C17]/85 backdrop-blur-md border border-gold-subtle px-4 py-3 rounded-2xl max-w-[210px] text-right shadow-lg pointer-events-none">
                <p className="font-arabic text-lg sm:text-xl text-[#C8A052] leading-tight" dir="rtl">
                  رَّبِّ زِدْنِي عِلْمًا
                </p>
                <p className="text-[11px] text-[#F3EBDD]/90 mt-1 italic font-light">
                  &ldquo;My Lord, increase me in knowledge.&rdquo;
                </p>
                <p className="text-[10px] text-[#8EA393] mt-0.5 tracking-wider uppercase font-semibold">
                  (Taha 20:114)
                </p>
              </div>

              {/* Bottom Subtle Gradient Scrim */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#031C17] to-transparent pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
