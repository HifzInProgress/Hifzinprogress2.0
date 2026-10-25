import React from 'react';
import { X, Play, BookOpen, Quote, ChevronRight } from 'lucide-react';
import { TimelineMilestone } from '../types';

interface MilestoneModalProps {
  milestone: TimelineMilestone | null;
  onClose: () => void;
  onWatchVideo: (day: number) => void;
}

export const MilestoneModal: React.FC<MilestoneModalProps> = ({ milestone, onClose, onWatchVideo }) => {
  if (!milestone) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative bg-[#031C17] border border-gold-subtle rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#062D24] border border-gold-subtle text-[#F3EBDD] hover:text-[#C8A052] hover:border-[#C8A052] flex items-center justify-center transition-colors"
          aria-label="Close milestone modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Milestone Badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-[#C8A052] text-[#031C17] text-xs font-bold uppercase tracking-wider">
            {milestone.day} · {milestone.badge}
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#F3EBDD] mt-2">
          {milestone.title}
        </h3>

        <p className="text-sm text-[#8EA393] font-light mt-1">
          {milestone.summary}
        </p>

        {/* Personal Reflection Box */}
        <div className="mt-6 bg-[#062D24] border border-gold-subtle rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A052]">
            <Quote className="w-4 h-4" />
            <span>Personal Journal Reflection</span>
          </div>

          <p className="text-sm text-[#F3EBDD]/90 leading-relaxed font-light italic">
            &ldquo;{milestone.reflection}&rdquo;
          </p>
        </div>

        {/* Ayah Meditation */}
        {milestone.ayahText && (
          <div className="mt-4 bg-[#073B30]/60 border border-gold-subtle/50 rounded-2xl p-5 space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A052]">
              Ayah of the Day · {milestone.surahRef}
            </div>

            <p className="font-arabic text-xl sm:text-2xl text-[#F3EBDD] text-right leading-loose" dir="rtl">
              {milestone.ayahText}
            </p>

            <p className="text-xs text-[#F3EBDD]/80 font-light">
              &ldquo;{milestone.ayahTranslation}&rdquo;
            </p>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-gold-subtle/30 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs text-[#8EA393] hover:text-[#F3EBDD] transition-colors"
          >
            Close
          </button>

          {milestone.videoRefDay && (
            <button
              onClick={() => {
                onClose();
                onWatchVideo(milestone.videoRefDay || 9);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8A052] hover:bg-[#D8B062] text-xs font-semibold uppercase tracking-wider text-[#031C17] transition-all shadow-md"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Day {milestone.videoRefDay} Video</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
