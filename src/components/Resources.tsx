import React from 'react';
import { 
  CalendarCheck, 
  LineChart, 
  BookHeart, 
  GraduationCap, 
  ArrowRight,
  Download,
  Printer
} from 'lucide-react';
import { RESOURCES_DATA } from '../data/hifzData';
import { ResourceItem } from '../types';

interface ResourcesProps {
  onSelectResource: (resource: ResourceItem) => void;
}

const RESOURCE_ICONS: Record<string, React.ReactNode> = {
  CalendarCheck: <CalendarCheck className="w-5 h-5 text-[#C8A052]" />,
  LineChart: <LineChart className="w-5 h-5 text-[#C8A052]" />,
  BookHeart: <BookHeart className="w-5 h-5 text-[#C8A052]" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#C8A052]" />,
};

export const Resources: React.FC<ResourcesProps> = ({ onSelectResource }) => {
  return (
    <section id="resources" className="py-20 bg-[#031C17] text-[#F3EBDD] border-b border-gold-subtle relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#062D24] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A052] uppercase">
            <span className="w-4 h-0.5 bg-[#C8A052]/60" />
            <span>Useful Resources</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3EBDD] mt-2">
            Tools for Your Hifz
          </h2>

          <p className="text-base sm:text-lg text-[#F3EBDD]/80 font-light mt-3">
            Downloadable guides, checklists and helpful materials to support your journey.
          </p>
        </div>

        {/* 4 Cards Grid + Quran Manuscript Desk Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 4 Resource Cards (8 cols on desktop) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {RESOURCES_DATA.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectResource(item)}
                className="group cursor-pointer rounded-2xl bg-[#062D24] border border-gold-subtle hover:border-[#C8A052] hover:bg-[#073B30] transition-all duration-300 p-5 flex flex-col justify-between shadow-md text-left min-h-[220px]"
              >
                <div>
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#031C17] border border-gold-subtle/70 flex items-center justify-center group-hover:scale-105 group-hover:border-[#C8A052] transition-transform mb-4">
                    {RESOURCE_ICONS[item.iconName] || <CalendarCheck className="w-5 h-5 text-[#C8A052]" />}
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#F3EBDD] group-hover:text-[#C8A052] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#8EA393] font-light mt-1.5 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gold-subtle/30 flex items-center justify-between text-xs text-[#C8A052] font-semibold">
                  <span className="group-hover:underline">Download &rarr;</span>
                  <span className="text-[10px] text-[#8EA393] font-normal uppercase tracking-wider">{item.pages}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Visual: Quran on Desk with Lantern (4 cols on desktop) */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl overflow-hidden border border-gold-subtle shadow-2xl bg-[#062D24] group">
              <img
                src="./images/quran-desk.png"
                alt="Illuminated Holy Quran and fountain pen manuscript on study desk under golden lantern light"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="p-5 bg-gradient-to-t from-[#031C17] to-transparent">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A052]">
                  Printable &amp; Digital
                </span>
                <p className="text-xs text-[#F3EBDD]/80 mt-1 leading-relaxed font-light">
                  All templates are prepared for standard A4 and Letter paper printing, with high-contrast text and zero ink waste.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
