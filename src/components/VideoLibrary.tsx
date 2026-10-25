import React, { useState } from 'react';
import { Play, Eye, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { VIDEOS_DATA } from '../data/hifzData';
import { VideoCategory, VideoItem } from '../types';

interface VideoLibraryProps {
  onSelectVideo: (video: VideoItem) => void;
}

const CATEGORIES: VideoCategory[] = ['All', 'My Journey', 'Guidance', 'Tips', 'Motivation'];

export const VideoLibrary: React.FC<VideoLibraryProps> = ({ onSelectVideo }) => {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('All');
  const [showAll, setShowAll] = useState(false);

  const filteredVideos = VIDEOS_DATA.filter((v) => {
    if (selectedCategory === 'All') return true;
    return v.category === selectedCategory;
  });

  const displayedVideos = showAll ? filteredVideos : filteredVideos.slice(0, 4);

  return (
    <section id="videos" className="py-20 bg-[#062D24] text-[#F3EBDD] border-b border-gold-subtle relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#031C17]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A052] uppercase">
              <span className="w-4 h-0.5 bg-[#C8A052]/60" />
              <span>Watch &amp; Learn</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3EBDD] mt-2">
              Our Videos
            </h2>

            <p className="text-base sm:text-lg text-[#F3EBDD]/80 font-light mt-3">
              Short clips, real lessons, and updates from my Hifz journey.
            </p>
          </div>

          {/* View All Videos Toggle */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#C8A052] hover:text-[#D8B062] transition-colors self-start md:self-end group"
          >
            <span>{showAll ? 'Show Fewer Videos' : 'View All Videos'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Filters (Segmented Buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#C8A052] text-[#031C17] shadow-sm font-semibold'
                    : 'bg-[#031C17]/80 text-[#F3EBDD]/80 border border-gold-subtle hover:border-[#C8A052] hover:text-[#F3EBDD]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onSelectVideo(video)}
              className="group cursor-pointer rounded-2xl bg-[#031C17] border border-gold-subtle hover:border-[#C8A052] transition-all duration-300 overflow-hidden shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Container with Play Overlay & Day Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#073B30]">
                  <img
                    src={video.thumbUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031C17] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Play Button Icon in Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-[#031C17]/80 border border-gold-subtle text-[#C8A052] group-hover:bg-[#C8A052] group-hover:text-[#031C17] group-hover:scale-110 flex items-center justify-center transition-all shadow-md">
                      <Play className="w-4 h-4 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Day Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#031C17]/90 border border-gold-subtle text-[11px] font-bold text-[#C8A052] tracking-wider uppercase backdrop-blur-sm">
                    Day {video.day}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5">
                  <div className="text-[11px] font-medium text-[#8EA393] uppercase tracking-wider mb-1">
                    {video.category}
                  </div>
                  
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#F3EBDD] group-hover:text-[#C8A052] transition-colors line-clamp-1">
                    {video.title}
                  </h3>

                  <p className="text-xs text-[#F3EBDD]/70 font-light mt-1.5 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Metadata (Views & Time Ago) */}
              <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-gold-subtle/30 flex items-center justify-between text-[11px] text-[#8EA393]">
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#C8A052]/80" />
                  <span>{video.views}</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C8A052]/80" />
                  <span>{video.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State if filter returns nothing */}
        {displayedVideos.length === 0 && (
          <div className="text-center py-12 bg-[#031C17]/40 rounded-2xl border border-gold-subtle">
            <p className="text-sm text-[#8EA393]">No videos found for this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};
