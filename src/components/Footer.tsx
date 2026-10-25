import React from 'react';
import { Instagram, Youtube, BookOpen, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#031C17] text-[#F3EBDD] border-t border-gold-subtle pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gold-subtle/30">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#073B30] to-[#04241e] border border-gold-subtle flex items-center justify-center text-[#C8A052]">
                <svg className="w-5 h-5 text-[#C8A052]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3v18" />
                  <path d="M5 6.5C7.5 5 10 5.5 12 7c2-1.5 4.5-2 7-.5v12.5c-2.5-1.5-5-1-7 .5-2-1.5-4.5-2-7-.5V6.5z" />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold text-[#F3EBDD]">
                Hifz In Progress
              </span>
            </div>

            <p className="text-sm text-[#8EA393] font-light max-w-sm leading-relaxed">
              Documenting the sacred journey of Qur&apos;an memorization from Day 1 to completion. Encouraging aspiring Huffaz worldwide.
            </p>

            <div className="text-xs text-[#C8A052] font-serif italic">
              &ldquo;One ayah at a time. In sha Allah.&rdquo;
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#062D24] border border-gold-subtle/60 text-[#F3EBDD]/80 hover:text-[#C8A052] hover:border-[#C8A052] flex items-center justify-center transition-colors"
                aria-label="Follow Hifz In Progress on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#062D24] border border-gold-subtle/60 text-[#F3EBDD]/80 hover:text-[#C8A052] hover:border-[#C8A052] flex items-center justify-center transition-colors"
                aria-label="Subscribe to Hifz In Progress on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A052]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#8EA393]">
              <li><a href="#hero" className="hover:text-[#F3EBDD] transition-colors">Home</a></li>
              <li><a href="#my-journey" className="hover:text-[#F3EBDD] transition-colors">My Journey Timeline</a></li>
              <li><a href="#learning-center" className="hover:text-[#F3EBDD] transition-colors">Hifz Learning Center</a></li>
              <li><a href="#videos" className="hover:text-[#F3EBDD] transition-colors">Video Library</a></li>
              <li><a href="#resources" className="hover:text-[#F3EBDD] transition-colors">Downloadable Tools</a></li>
              <li><a href="#tracker" className="hover:text-[#F3EBDD] transition-colors">Daily Hifz Tracker</a></li>
            </ul>
          </div>

          {/* Ayah Reflection Quote (4 cols) */}
          <div className="md:col-span-4 bg-[#062D24]/50 border border-gold-subtle rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A052]">
              Quranic Guidance
            </h4>
            <p className="font-arabic text-lg text-[#F3EBDD] leading-relaxed text-right" dir="rtl">
              فَمَن تَبِعَ هُدَايَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ
            </p>
            <p className="font-serif italic text-xs text-[#F3EBDD]/80">
              &ldquo;And whoever follows My guidance, there will be no fear concerning them, nor will they grieve.&rdquo;
            </p>
            <p className="text-[10px] text-[#8EA393] uppercase tracking-wider">
              Surah Al-Baqarah (2:38)
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8EA393]">
          <div>
            &copy; {new Date().getFullYear()} Hifz In Progress. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Dedicated to seeking the pleasure of Allah.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
