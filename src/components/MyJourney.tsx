import React, { useState } from 'react';
import { Play, Calendar, CheckCircle2, ChevronRight, BookOpen, Clock } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/hifzData';
import { TimelineMilestone } from '../types';

interface MyJourneyProps {
  onWatchVideo: (day: number) => void;
  onSelectMilestone: (milestone: TimelineMilestone) => void;
}

export const MyJourney: React.FC<MyJourneyProps> = ({ onWatchVideo, onSelectMilestone }) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const activeMilestone = TIMELINE_MILESTONES[activeDayIndex] || TIMELINE_MILESTONES[0];

  return (
    <section id="my-journey" className="py-20 bg-[#062D24] text-[#F3EBDD] border-b border-gold-subtle relative overflow-hidden">
      
      {/* Subtle ambient mosque arches background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A052]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Text & Seated Reciter in Mosque */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A052] uppercase">
              <span className="w-4 h-0.5 bg-[#C8A052]/60" />
              <span>My Journey</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3EBDD]">
              The Path to <br />
              <span className="text-[#C8A052]">Hifz-e-Qur&apos;an</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F3EBDD]/80 leading-relaxed font-light max-w-xl">
              A personal journey of dedication, challenges, small victories and the endless mercy of Allah. 
              From Day 1 to the completion — every step is a blessing.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onWatchVideo(9)}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#031C17] bg-[#C8A052] hover:bg-[#D8B062] active:scale-95 transition-all rounded-full shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A052]"
              >
                <span>Watch Latest Video</span>
                <ChevronRight className="w-4 h-4 text-[#031C17]" />
              </button>
            </div>
          </div>

          {/* Right Visual: Seated reciter on rehal in mosque */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-gold-subtle shadow-xl bg-[#031C17] group">
              <img
                src="./images/seated-reciter.png"
                alt="Faceless Muslim student seated in a magnificent arched mosque reciting from a wooden rehal"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031C17]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-xs text-[#F3EBDD]/90 font-light">
                Documenting every single step honestly.
              </div>
            </div>
          </div>

        </div>

        {/* Journey Timeline Section */}
        <div className="mt-16 pt-12 border-t border-gold-subtle/40">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#F3EBDD]">Journey Timeline</h3>
              <p className="text-xs sm:text-sm text-[#8EA393] mt-1">
                Click any milestone to inspect personal journal notes and Quranic reflections.
              </p>
            </div>

            {/* Ayah Quote on the Right matching reference */}
            <div className="bg-[#031C17]/60 border border-gold-subtle/60 rounded-xl px-5 py-3 max-w-sm text-right">
              <p className="font-serif italic text-sm text-[#C8A052]">
                &ldquo;And We will make your way easy.&rdquo;
              </p>
              <p className="text-[11px] text-[#8EA393] uppercase tracking-wider mt-0.5">
                Surah Al-A&apos;la (87:8)
              </p>
            </div>
          </div>

          {/* Horizontal Interactive Timeline Stepper */}
          <div className="bg-[#073B30]/60 border border-gold-subtle rounded-2xl p-6 shadow-lg">
            
            {/* Steps bar */}
            <div className="relative overflow-x-auto pb-4 pt-2">
              <div className="flex items-center justify-between min-w-[650px] relative">
                
                {/* Connecting track line */}
                <div className="absolute top-4 left-6 right-6 h-0.5 bg-[#C8A052]/25 z-0" />

                {TIMELINE_MILESTONES.map((milestone, idx) => {
                  const isSelected = activeDayIndex === idx;
                  return (
                    <button
                      key={milestone.day}
                      onClick={() => {
                        setActiveDayIndex(idx);
                        onSelectMilestone(milestone);
                      }}
                      className="relative z-10 flex flex-col items-center group focus-visible:outline-none text-center px-2"
                    >
                      {/* Circle indicator */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-[#C8A052] text-[#031C17] ring-4 ring-[#C8A052]/30 scale-110 shadow-lg' 
                          : 'bg-[#031C17] text-[#C8A052] border border-gold-subtle group-hover:border-[#C8A052]'
                      }`}>
                        <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-[#031C17]' : 'bg-[#C8A052]'}`} />
                      </div>

                      {/* Day Label */}
                      <span className={`text-xs font-semibold mt-3 whitespace-nowrap transition-colors ${
                        isSelected ? 'text-[#C8A052]' : 'text-[#F3EBDD]/80 group-hover:text-[#F3EBDD]'
                      }`}>
                        {milestone.day}
                      </span>

                      {/* Badge / Status */}
                      <span className="text-[10px] text-[#8EA393] uppercase tracking-wider mt-0.5 whitespace-nowrap">
                        {milestone.badge}
                      </span>
                    </button>
                  );
                })}

              </div>
            </div>

            {/* Active Milestone Card Preview */}
            <div className="mt-6 pt-6 border-t border-gold-subtle/30 bg-[#031C17]/40 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#C8A052]/15 text-[#C8A052] border border-[#C8A052]/30">
                    {activeMilestone.day} · {activeMilestone.badge}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#F3EBDD]">
                    {activeMilestone.title}
                  </h4>
                </div>
                <p className="text-sm text-[#F3EBDD]/80 leading-relaxed font-light">
                  {activeMilestone.summary}
                </p>
                {activeMilestone.ayahText && (
                  <div className="pt-2 flex items-center gap-3 text-xs text-[#C8A052]">
                    <span className="font-arabic text-base" dir="rtl">{activeMilestone.ayahText}</span>
                    <span className="text-[#8EA393]">({activeMilestone.surahRef})</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => onSelectMilestone(activeMilestone)}
                  className="px-4 py-2 text-xs font-medium text-[#F3EBDD] border border-gold-subtle hover:border-[#C8A052] rounded-lg transition-colors"
                >
                  Read Full Reflection
                </button>
                {activeMilestone.videoRefDay && (
                  <button
                    onClick={() => onWatchVideo(activeMilestone.videoRefDay || 9)}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#031C17] bg-[#C8A052] hover:bg-[#D8B062] rounded-lg transition-colors"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch Day {activeMilestone.videoRefDay}</span>
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
