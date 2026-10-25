import React from 'react';
import { Handshake, HeartHandshake, Sparkles, ArrowRight, Instagram, Mail } from 'lucide-react';

interface SupportAboutProps {
  onOpenGetInTouch: () => void;
}

export const SupportAbout: React.FC<SupportAboutProps> = ({ onOpenGetInTouch }) => {
  return (
    <section id="about" className="py-20 bg-[#031C17] text-[#F3EBDD] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#073B30]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A052] uppercase">
            <span className="w-4 h-0.5 bg-[#C8A052]/60" />
            <span>Support &amp; Community</span>
            <span className="w-4 h-0.5 bg-[#C8A052]/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3EBDD] mt-2">
            Support the Journey
          </h2>

          <p className="text-base sm:text-lg text-[#F3EBDD]/80 font-light mt-3 leading-relaxed">
            Your support helps keep this journey going. Together we can spread the message of the Qur&apos;an and make a bigger impact.
          </p>
        </div>

        {/* 3 Support Cards matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          
          {/* Card 1: Sponsorships */}
          <div className="rounded-2xl bg-[#062D24] border border-gold-subtle hover:border-[#C8A052] transition-colors p-6 text-center shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-[#031C17] border border-gold-subtle/60 text-[#C8A052] flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F3EBDD]">
              Sponsorships
            </h3>
            <p className="text-xs text-[#8EA393] mt-2 font-light">
              For future media, recording gear, and educational video projects.
            </p>
          </div>

          {/* Card 2: Collaborations */}
          <div className="rounded-2xl bg-[#062D24] border border-gold-subtle hover:border-[#C8A052] transition-colors p-6 text-center shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-[#031C17] border border-gold-subtle/60 text-[#C8A052] flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F3EBDD]">
              Collaborations
            </h3>
            <p className="text-xs text-[#8EA393] mt-2 font-light">
              Halal, educational, and beneficial partnerships with Quran teachers &amp; creators.
            </p>
          </div>

          {/* Card 3: Community & Duas */}
          <div className="rounded-2xl bg-[#062D24] border border-gold-subtle hover:border-[#C8A052] transition-colors p-6 text-center shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-[#031C17] border border-gold-subtle/60 text-[#C8A052] flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F3EBDD]">
              Community &amp; Duas
            </h3>
            <p className="text-xs text-[#8EA393] mt-2 font-light">
              The greatest gift you can offer is your sincere prayers for steadfast completion.
            </p>
          </div>

        </div>

        {/* CTA Button: Get In Touch */}
        <div className="text-center mb-12">
          <button
            onClick={onOpenGetInTouch}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#031C17] bg-[#C8A052] hover:bg-[#D8B062] active:scale-95 transition-all rounded-full shadow-lg shadow-[#031C17]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A052]"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 text-[#031C17]" />
          </button>
        </div>

        {/* Night Mosque Skyline Silhouette matching reference */}
        <div className="relative rounded-3xl overflow-hidden border border-gold-subtle shadow-2xl max-w-5xl mx-auto">
          <img
            src="./images/mosque-night.png"
            alt="Panoramic illuminated mosque domes, minarets, and mountain landscape under crescent moon"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031C17] via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-[#F3EBDD]/90">
            <span className="font-serif italic">&ldquo;One ayah at a time. In sha Allah.&rdquo;</span>
            <span className="text-[#8EA393]">Hifz In Progress Community</span>
          </div>
        </div>

      </div>
    </section>
  );
};
