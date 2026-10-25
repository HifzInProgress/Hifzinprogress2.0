import React, { useState, useMemo } from 'react';
import { Search, X, Video, BookOpen, FileText, Calendar, ArrowRight } from 'lucide-react';
import { VIDEOS_DATA, GUIDES_DATA, RESOURCES_DATA, TIMELINE_MILESTONES } from '../data/hifzData';
import { VideoItem, GuideItem, ResourceItem, TimelineMilestone } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVideo: (v: VideoItem) => void;
  onSelectGuide: (g: GuideItem) => void;
  onSelectResource: (r: ResourceItem) => void;
  onSelectMilestone: (m: TimelineMilestone) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectVideo,
  onSelectGuide,
  onSelectResource,
  onSelectMilestone,
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { videos: [], guides: [], resources: [], milestones: [] };

    return {
      videos: VIDEOS_DATA.filter(
        v => v.title.toLowerCase().includes(q) ||
             v.description.toLowerCase().includes(q) ||
             v.category.toLowerCase().includes(q)
      ),
      guides: GUIDES_DATA.filter(
        g => g.title.toLowerCase().includes(q) ||
             g.tagline.toLowerCase().includes(q) ||
             g.summary.toLowerCase().includes(q)
      ),
      resources: RESOURCES_DATA.filter(
        r => r.title.toLowerCase().includes(q) ||
             r.description.toLowerCase().includes(q) ||
             r.subtitle.toLowerCase().includes(q)
      ),
      milestones: TIMELINE_MILESTONES.filter(
        m => m.title.toLowerCase().includes(q) ||
             m.summary.toLowerCase().includes(q) ||
             m.reflection.toLowerCase().includes(q)
      )
    };
  }, [query]);

  if (!isOpen) return null;

  const totalCount = results.videos.length + results.guides.length + results.resources.length + results.milestones.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative bg-[#031C17] border border-gold-subtle rounded-3xl max-w-2xl w-full p-6 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-[#C8A052]" />
          <input
            type="text"
            autoFocus
            placeholder="Search guides, videos, routines, duas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#062D24] border border-gold-subtle rounded-2xl pl-12 pr-12 py-3.5 text-sm sm:text-base text-[#F3EBDD] placeholder-[#8EA393]/60 focus:outline-none focus:border-[#C8A052] transition-colors"
          />
          <button
            onClick={onClose}
            className="absolute right-3.5 w-8 h-8 rounded-lg text-[#F3EBDD]/60 hover:text-[#C8A052] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="mt-6 max-h-[60vh] overflow-y-auto space-y-4 pr-1">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-[#8EA393]">
              <p className="text-xs uppercase tracking-wider text-[#C8A052] mb-2 font-semibold">
                Quick Suggestions
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Tajweed', 'Sabaq', 'Fajr Routine', 'Juz Amma', 'Never Give Up', 'Daily Planner'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full bg-[#062D24] border border-gold-subtle text-xs text-[#F3EBDD] hover:border-[#C8A052] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalCount === 0 ? (
            <div className="py-12 text-center text-[#8EA393]">
              No results found for &ldquo;{query}&rdquo;. Try another term like &ldquo;Tajweed&rdquo; or &ldquo;Planner&rdquo;.
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Guides */}
              {results.guides.length > 0 && (
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A052] mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Learning Center Guides ({results.guides.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.guides.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => {
                          onClose();
                          onSelectGuide(g);
                        }}
                        className="w-full p-3 rounded-xl bg-[#062D24]/60 hover:bg-[#073B30] border border-gold-subtle/40 hover:border-[#C8A052] flex items-center justify-between text-left transition-colors group"
                      >
                        <div>
                          <div className="font-serif text-sm font-bold text-[#F3EBDD] group-hover:text-[#C8A052]">
                            {g.title}
                          </div>
                          <div className="text-xs text-[#8EA393]">{g.tagline}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#C8A052] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Videos */}
              {results.videos.length > 0 && (
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A052] mb-2 flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5" />
                    <span>Videos ({results.videos.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.videos.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => {
                          onClose();
                          onSelectVideo(v);
                        }}
                        className="w-full p-3 rounded-xl bg-[#062D24]/60 hover:bg-[#073B30] border border-gold-subtle/40 hover:border-[#C8A052] flex items-center justify-between text-left transition-colors group"
                      >
                        <div>
                          <div className="font-serif text-sm font-bold text-[#F3EBDD] group-hover:text-[#C8A052]">
                            Day {v.day}: {v.title}
                          </div>
                          <div className="text-xs text-[#8EA393]">{v.description.slice(0, 75)}...</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#C8A052] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources */}
              {results.resources.length > 0 && (
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A052] mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Downloadable Resources ({results.resources.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.resources.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => {
                          onClose();
                          onSelectResource(r);
                        }}
                        className="w-full p-3 rounded-xl bg-[#062D24]/60 hover:bg-[#073B30] border border-gold-subtle/40 hover:border-[#C8A052] flex items-center justify-between text-left transition-colors group"
                      >
                        <div>
                          <div className="font-serif text-sm font-bold text-[#F3EBDD] group-hover:text-[#C8A052]">
                            {r.title}
                          </div>
                          <div className="text-xs text-[#8EA393]">{r.subtitle}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#C8A052] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Milestones */}
              {results.milestones.length > 0 && (
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A052] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Journey Milestones ({results.milestones.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.milestones.map((m) => (
                      <button
                        key={m.day}
                        onClick={() => {
                          onClose();
                          onSelectMilestone(m);
                        }}
                        className="w-full p-3 rounded-xl bg-[#062D24]/60 hover:bg-[#073B30] border border-gold-subtle/40 hover:border-[#C8A052] flex items-center justify-between text-left transition-colors group"
                      >
                        <div>
                          <div className="font-serif text-sm font-bold text-[#F3EBDD] group-hover:text-[#C8A052]">
                            {m.day}: {m.title}
                          </div>
                          <div className="text-xs text-[#8EA393]">{m.summary}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#C8A052] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
