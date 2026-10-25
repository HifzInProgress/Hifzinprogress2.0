export type TrackerType = 'sabaq' | 'sabqi' | 'manzil';

export type QualityRating = 'mumtaz' | 'jayyid_jiddan' | 'jayyid' | 'needs_revision';

export interface TrackerRecord {
  id: string;
  date: string;
  type: TrackerType;
  juz: number;
  surah: string;
  ayahRange: string;
  pagesCompleted?: number;
  timeSpentMinutes: number;
  quality: QualityRating;
  notes?: string;
  createdAt: number;
}

export type VideoCategory = 'All' | 'My Journey' | 'Guidance' | 'Tips' | 'Motivation';

export interface VideoItem {
  id: string;
  day: number;
  title: string;
  subtitle: string;
  description: string;
  views: string;
  timeAgo: string;
  category: VideoCategory;
  thumbUrl: string;
  youtubeId?: string;
  keyTakeaways: string[];
}

export interface GuideItem {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  category: string;
  readTime: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
    bulletPoints?: string[];
  }[];
  qualifiedTeacherNote?: string;
  recommendedDua?: {
    arabic: string;
    transliteration: string;
    translation: string;
    reference: string;
  };
}

export interface ResourceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  pages: string;
  format: string;
  description: string;
  iconName: string;
  printableTitle: string;
  checklistItems: string[];
  instructions: string[];
}

export interface TimelineMilestone {
  day: string;
  badge: string;
  title: string;
  summary: string;
  reflection: string;
  ayahText?: string;
  ayahTranslation?: string;
  surahRef?: string;
  videoRefDay?: number;
}
