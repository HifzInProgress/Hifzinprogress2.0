import React from 'react';
import { X, BookOpen, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { GuideItem } from '../types';

interface GuideModalProps {
  guide: GuideItem | null;
  onClose: () => void;
  onGoToTracker: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ guide, onClose, onGoToTracker }) => {
  if (!guide) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative bg-[#031C17] border border-gold-subtle rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right z-20 w-10 h-10 rounded-full bg-[#062D24] border border-gold-subtle text-[#F3EBDD] hover:text-[#C8A052] hover:border-[#C8A052] flex items-center justify-center transition-colors"
          aria-label="Close guide modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="mb-6 pr-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A052] mb-1">
            <span>{guide.category}</span>
            <span>·</span>
            <span>{guide.readTime}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3EBDD] mt-1">
            {guide.title}
          </h3>

          <p className="text-sm text-[#8EA393] font-light mt-1">
            {guide.tagline}
          </p>
        </div>

        {/* Qualified Teacher Warning Notice */}
        {guide.qualifiedTeacherNote && (
          <div className="mb-6 bg-[#073B30] border border-gold-subtle rounded-2xl p-4 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#C8A052] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#F3EBDD]/90 leading-relaxed font-light">
              <strong className="text-[#C8A052] font-semibold">Teacher Advisory:</strong> {guide.qualifiedTeacherNote}
            </p>
          </div>
        )}

        {/* Guide Content Sections */}
        <div className="space-y-6 text-[#F3EBDD]/90">
          {guide.sections.map((sec, idx) => (
            <div key={idx} className="bg-[#062D24]/60 border border-gold-subtle/50 rounded-2xl p-5 space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#F3EBDD]">
                {sec.heading}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#F3EBDD]/80 font-light">
                {sec.content}
              </p>
              {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                <ul className="space-y-1.5 pt-1">
                  {sec.bulletPoints.map((bp, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-xs sm:text-sm text-[#8EA393]">
                      <span className="text-[#C8A052] font-bold">›</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Recommended Dua Card */}
        {guide.recommendedDua && (
          <div className="mt-6 bg-[#073B30]/80 border border-gold-subtle rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A052]">
              <Sparkles className="w-4 h-4" />
              <span>Recommended Dua for This Step</span>
            </div>

            <p className="font-arabic text-xl sm:text-2xl text-[#F3EBDD] text-right leading-loose pt-1" dir="rtl">
              {guide.recommendedDua.arabic}
            </p>

            <div className="text-xs text-[#C8A052] italic font-light">
              {guide.recommendedDua.transliteration}
            </div>

            <div className="text-xs sm:text-sm text-[#F3EBDD]/80 font-light">
              &ldquo;{guide.recommendedDua.translation}&rdquo;
            </div>

            <div className="text-[10px] text-[#8EA393] uppercase tracking-wider pt-1 border-t border-gold-subtle/30">
              Reference: {guide.recommendedDua.reference}
            </div>
          </div>
        )}

        {/* Modal Footer Controls */}
        <div className="mt-8 pt-4 border-t border-gold-subtle/30 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-gold-subtle text-xs font-medium text-[#F3EBDD] hover:border-[#C8A052] transition-colors"
          >
            Close Guide
          </button>

          <button
            onClick={() => {
              onClose();
              onGoToTracker();
            }}
            className="px-5 py-2.5 rounded-full bg-[#C8A052] hover:bg-[#D8B062] text-xs font-semibold text-[#031C17] uppercase tracking-wider transition-colors shadow-md"
          >
            Open Daily Tracker &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};
