import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Eye, Clock, Sparkles, CheckCircle2, Share2, Instagram } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!video) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative bg-[#031C17] border border-gold-subtle rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#031C17]/80 border border-gold-subtle text-[#F3EBDD] hover:text-[#C8A052] hover:border-[#C8A052] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Display Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={video.thumbUrl}
            alt={video.title}
            className="w-full h-full object-cover opacity-75"
          />

          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#031C17] via-transparent to-black/40" />

          {/* Player Controls Bar */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/95 to-transparent flex items-center justify-between gap-4 z-10">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-[#C8A052] text-[#031C17] flex items-center justify-center hover:bg-[#D8B062] transition-colors shadow-md"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current translate-x-0.5" />}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 text-[#F3EBDD]/80 hover:text-[#C8A052] transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-xs text-[#F3EBDD]/80 font-mono">
                {isPlaying ? '02:45 / 07:18' : '00:00 / 07:18'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#C8A052]/20 border border-[#C8A052]/40 text-[10px] font-bold text-[#C8A052] uppercase tracking-wider">
                Day {video.day}
              </span>
            </div>
          </div>

          {/* Center Play Indicator when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 rounded-full bg-[#C8A052] text-[#031C17] flex items-center justify-center hover:scale-105 transition-transform shadow-xl"
              >
                <Play className="w-7 h-7 fill-current translate-x-0.5" />
              </button>
            </div>
          )}
        </div>

        {/* Video Information & Takeaways */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#8EA393] mb-1.5">
              <span className="text-[#C8A052] font-semibold uppercase tracking-wider">{video.category}</span>
              <span>·</span>
              <span>{video.views}</span>
              <span>·</span>
              <span>{video.timeAgo}</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#F3EBDD]">
              Day {video.day}: {video.title}
            </h3>

            <p className="text-sm text-[#F3EBDD]/80 mt-2 font-light leading-relaxed">
              {video.description}
            </p>
          </div>

          {/* Key Takeaways */}
          {video.keyTakeaways && video.keyTakeaways.length > 0 && (
            <div className="bg-[#062D24] border border-gold-subtle rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A052] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C8A052]" />
                <span>Key Lessons &amp; Practical Habits</span>
              </h4>
              <ul className="space-y-2">
                {video.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3EBDD]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A052] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Modal Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-gold-subtle/30">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8A052] text-[#031C17] text-xs font-semibold uppercase tracking-wider hover:bg-[#D8B062] transition-colors shadow-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>Watch on Instagram</span>
            </a>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-subtle text-xs font-medium text-[#F3EBDD] hover:border-[#C8A052] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-[#C8A052]" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Video'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
